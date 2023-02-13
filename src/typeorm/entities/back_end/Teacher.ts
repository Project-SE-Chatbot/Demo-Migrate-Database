import {  Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Major } from "./Major";

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
    
    @ManyToMany(() => Major, (major) => major.teacher, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    @JoinTable()
    major: Major[]

}