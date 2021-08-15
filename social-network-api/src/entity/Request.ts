import { Entity, PrimaryGeneratedColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {Profile} from '../entity/Profile'


@Entity()
export class Request {

    @ManyToOne(() => Profile, profile => profile.requests, {primary: true})
    profile: Profile;
    
    @ManyToOne(() => Profile, profile => profile.requesters,  {primary: true})
    sender: Profile;

}