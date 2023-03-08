
import {  Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Place } from "./Place";
import { Teacher } from "./Teacher";

@Entity({name: 'major_elective'})

export class Major_Elective{

    @PrimaryGeneratedColumn()
    id_major_elective: number;
    
    @Column({unique: true})
    course_code: string

    @Column({unique: true})
    name: string

    @Column()
    link_description : string;

}