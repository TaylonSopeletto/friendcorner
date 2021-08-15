import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Post } from './Post'
import {Request} from './Request'

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column({nullable: true})
    bio: string;

    @Column({nullable: true})
    profileImage: string;

    @Column()
    password: number;

    @OneToMany(() => Post, post => post.profile)
    posts: Post[];

    @ManyToMany(type => Profile)
    @JoinTable()
    friends: Profile[];

    @OneToMany(() => Request, request => request.profile)
    requests: Request[];

    @OneToMany(() => Request, request => request.sender)
    requesters: Request[];

}
