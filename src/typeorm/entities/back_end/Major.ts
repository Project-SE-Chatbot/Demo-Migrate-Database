
import {  Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Place } from "./Place";
import { Teacher } from "./Teacher";

@Entity({name: 'major'})

export class Major{

    @PrimaryGeneratedColumn()
    id_major: number;
    
    @Column({unique: true})
    course_code: string
    
    @Column({unique: true})
    name: string

    @ManyToOne(() => Teacher, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    teacher: number;

    @Column()
    term: string;

    @ManyToOne(() => Place, {onDelete: "SET NULL", onUpdate: "CASCADE"})
    place: Place

    @Column()
    day  : string;
    
    @Column()
    time  : string;

}