import {  Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'teacher'})

export class Teacher{
    @PrimaryGeneratedColumn()
    id_teacher : number;

    @Column()
    name: string

    // ???
    @Column()
    picture: string;
    // ???
    @Column()
    location: string;

    @Column()
    address : string;

    @Column()
    time  : string;
    

}