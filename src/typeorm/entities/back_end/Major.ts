import {  Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Free_Elective } from "./Free Elective";
import { Place } from "./Place";

@Entity({name: 'major'})

export class Major{

    @PrimaryGeneratedColumn()
    id_major: number;
    
    @Column({unique: true})
    course_code: string

    @Column({unique: true})
    name: string

    @Column()
    name_teacher: string;

    @Column()
    term: string;

    @Column()
    place : string;

    @Column()
    day  : string;
    
    @Column()
    time  : string;

    @OneToOne(() => Place, (place) => place.major, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    place_study: Place

    @OneToMany(() => Free_Elective, (freeElective) => freeElective.major, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    review: Free_Elective[]
}