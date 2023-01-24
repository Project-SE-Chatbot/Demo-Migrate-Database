import {  Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}