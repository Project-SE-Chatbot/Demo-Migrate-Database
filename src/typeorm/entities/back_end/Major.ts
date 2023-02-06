import {  Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Place } from "./Place";

@Entity({name: 'major'})

export class Major{

    @PrimaryGeneratedColumn()
    id_major: number;

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
}