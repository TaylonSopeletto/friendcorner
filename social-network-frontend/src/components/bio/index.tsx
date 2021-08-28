import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Container, Image, Title, Profile, Description, Friends, Friend, FriendsTitle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

//fetch
import { listFriends } from 'src/fetch/friends'
import { createRequest } from 'src/fetch/requests'

const Bio = () => {

    const router = useRouter()

    const [profile, setProfile] = useState({
        username: '',
        profileImage: '',
        bio: '',
        id: ''
    })

    const [friends, setFriends] = useState([])

    const client = new ApolloClient({
        uri: 'https://friend-corner-back.herokuapp.com/',
        cache: new InMemoryCache()

    });

    const onSendRequest = (id: any) => {
        createRequest({ receiverId: id })
    }

    const fetchProfile = async () => {
        const profile = await client.query({
            query: gql`
            {
                findProfile(username: "${router.query.profileId}"){
                    username,
                    profileImage,
                    bio,
                    id
                }
            }
            `
        });

        setProfile(profile.data.findProfile)
    }

    useEffect(() => {
        fetchProfile()
    }, [router.query.profileId])

    useEffect(() => {
        listFriends({ username: profile?.username })
            .then(res => {
                setFriends(res.data.data.friends)
            })
    }, [profile?.username])

    return (
        <Container>
            <Profile>
                <Image>
                    <img src={profile?.profileImage || '/profile.png'} />
                </Image>
                <Title>{profile?.username}</Title>
            </Profile>

            <Description>
                <p>{profile?.bio}</p>
            </Description>

            <FriendsTitle>Friends</FriendsTitle>
            <Friends>
                {
                    friends?.map(item =>
                        <a href={item.username}>
                            <Friend>
                                <img src={item.profileImage || 'profile.png'} />
                            </Friend>
                        </a>
                    )
                }
            </Friends>

            <button onClick={() => onSendRequest(profile?.id)} ><FontAwesomeIcon icon={faUserFriends} />Send request</button>
        </Container>
    )
}

export default Bio;