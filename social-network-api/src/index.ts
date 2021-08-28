import "reflect-metadata";
import { createConnection } from "typeorm";
import { Comment } from "./entity/Comment";
import { Post } from "./entity/Post";
import { Profile } from "./entity/Profile"
import { Request } from "./entity/Request"
import { getManager } from 'typeorm';
const jwt = require('jsonwebtoken')
import { getConnection } from 'typeorm'

createConnection().then(async connection => {

    interface PostArgsInterface {
        postId?: number,
        text: String,
        token: String
    }

    /* repositories */

    const postRepository = getManager().getRepository(Post);
    const commentRepository = getManager().getRepository(Comment)
    const profileRepository = getManager().getRepository(Profile)
    const requestRepository = getManager().getRepository(Request)

    const { ApolloServer, gql } = require('apollo-server');
    const typeDefs = gql`

    type Comment{
        id: ID,
        text: String
        post: Post
    }

    type Profile{
        id: ID,
        username: String,
        email: String,
        posts: [Post],
        bio: String,
        profileImage: String
    }

    type Auth{
        id: ID,
        username: String,
        email: String,
        jwtToken: String
    }

    type Post{
        id: ID,
        text: String
        comments: [Comment]
        profile: Profile,
        created_at: String
        
    }

    type Query {
        posts: [Post]
        profilePosts(username: String): [Post]
        comments: [Comment]
        profiles(profileId: ID) : [Profile]
        friends(username: String) : [Profile]
        requests: [Request]
        tokenProfile: Profile
        findProfile(username: String) : Profile
    }

    type Request{
        id: ID,
        sender: Profile,
        profile: Profile
    }

    type Mutation{
        login(email: String, password: String) : Auth
        createPost(text: String) : Post
        createComment(text: String, postId: ID) : Post
        createProfile(username: String, password: String, email: String) : Profile
        createRequest(id: ID): Request
        acceptRequest(senderId: ID) : String
    }
    `;


    const resolvers = {

        Query: {
            findProfile: async (_, args, context) => {
                const profile = await profileRepository.findOne({ username: args.username })
                return profile
            },
            tokenProfile: async (_, args, context) => {
                if (!context.token) {
                    return { id: 'user not logged' }
                }

                const token = await jwt.verify(context.token.split(' ')[1], 'safe_key')
                const result = await profileRepository.findOne(token.id)

                return result
            },

            requests: async (_, args, context) => {

                if (!context.token) {
                    return { id: 'user not logged' }
                }

                const token = await jwt.verify(context.token.split(' ')[1], 'safe_key')

                const requests = await requestRepository.find({
                    where: {
                        profile: token.id
                    },
                    join: {
                        alias: 'request',
                        leftJoinAndSelect: {
                            sender: 'request.sender'
                        }
                    }
                })


                return requests
            },
            friends: async (_, args, context) => {
                const friends = await profileRepository.find({
                    where: {
                        username: args.username
                    },
                    join: {
                        alias: "profile",
                        leftJoinAndSelect: {
                            friends: "profile.friends"
                        },
                    }
                })

                if (friends.length > 0) return friends[0].friends

            },
            profilePosts: async (_, args, context) => {

                const profile = await profileRepository.findOne({ username: args.username })

                const result = await postRepository.find({
                    where: {
                        profile: profile
                    },
                    join: {
                        alias: "post",
                        leftJoinAndSelect: {
                            comments: "post.comments",
                            profile: "post.profile"
                        },
                    },
                    order: {
                        created_at: 'DESC'
                    }
                })
                return result
            },
            posts: async (_, args, context) => {

                const result = await postRepository.find({
                    join: {
                        alias: "post",
                        leftJoinAndSelect: {
                            comments: "post.comments",
                            profile: "post.profile"
                        },
                    },
                    order: {
                        created_at: 'DESC'
                    }
                })
                return result
            },
            comments: async () => {
                const result = await commentRepository.find({
                    join: {
                        alias: "comment",
                        leftJoinAndSelect: {
                            post: "comment.post"
                        }
                    }
                })
                return result
            },
            profiles: async () => {
                const result = await profileRepository.find({
                    join: {
                        alias: "profile",
                        leftJoinAndSelect: {
                            posts: "profile.posts"
                        }
                    }
                })

                return result
            }
        },
        Mutation: {
            acceptRequest: async (_: any, args: any, context) => {

                if (!context.token) {
                    return { id: 'user not logged' }
                }

                const token = await jwt.verify(context.token.split(' ')[1], 'safe_key')

                const profile = await profileRepository.findOne(token.id)

                const request = await requestRepository.findOne({
                    where: {
                        profile: profile
                    },
                    join: {
                        alias: 'request',
                        leftJoinAndSelect: {
                            sender: 'request.sender'
                        }
                    }
                })

                const senderProfile = await profileRepository.findOne(request.sender.id)

                //profile.friends = [senderProfile]
                //senderProfile.friends = [profile]

                /* friends relations needs to be done with query builder,
                for some reason i cant push a item to them with ORM */

                await getConnection()
                    .createQueryBuilder()
                    .relation(Profile, "friends")
                    .of(profile)
                    .add(senderProfile);

                await getConnection()
                    .createQueryBuilder()
                    .relation(Profile, "friends")
                    .of(senderProfile)
                    .add(profile);

                const result = await profileRepository.save(profile)
                const result2 = await profileRepository.save(senderProfile)

                const deleteRequest = await requestRepository.delete(request)

                return "friend accepted"


            },
            createRequest: async (_: any, args: any, context) => {

                if (!context.token) {
                    return { id: 'user not logged' }
                }

                const token = await jwt.verify(context.token.split(' ')[1], 'safe_key')

                const profile = await profileRepository.findOne(token.id)
                const invited = await profileRepository.findOne(args.id)
                const request = new Request()

                request.profile = invited
                request.sender = profile

                const result = await requestRepository.save(request)

                return result

            },

            login: async (_, args) => {

                const user = await profileRepository.findOne({ email: args.email, password: args.password })
                const token = await jwt.sign({ id: user.id, username: user.username }, 'safe_key')

                return { ...user, jwtToken: `${`Bearer ${token}`}` }

            },
            createPost: async (_: any, args: any, context: PostArgsInterface) => {

                if (!context.token) {
                    return { text: 'user not logged' }
                }

                const token = await jwt.verify(context.token.split(' ')[1], 'safe_key')

                const ownerProfile = await profileRepository.findOne(token.id)

                const newPost = new Post();
                newPost.text = args.text
                newPost.profile = ownerProfile

                const result = await postRepository.save(newPost)
                return result
            },
            createComment: async (_: any, args) => {
                const ownerPost = await postRepository.findOne(args.postId)
                const newComment = new Comment()

                newComment.text = args.text
                newComment.post = ownerPost

                const result = await commentRepository.save(newComment)

                return result
            },

            createProfile: async (_: any, args) => {
                const newProfile = new Profile()
                newProfile.username = args.username
                newProfile.password = args.password
                newProfile.email = args.email

                const result = await profileRepository.save(newProfile)

                return result
            }
        }
    };

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => {
            let token

            if (req.headers.authorization) {
                token = req.headers.authorization.replace('Bearer', '')
            }

            return { token }
        },
        introspection: true,
        playground: true
    });

    server.listen({ port: process.env.PORT || 3000 }).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });

}).catch(error => console.log(error));
