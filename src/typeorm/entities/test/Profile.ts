import { profile } from "console";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : 'user_profile'})
export class Profile{
        @PrimaryGeneratedColumn()
        id: number;

        @Column({ unique: true})
        firstName: string;

        @Column()
        lastName: string;

        @Column()
        age: number;
        
        @Column()
        job: string;
        



}