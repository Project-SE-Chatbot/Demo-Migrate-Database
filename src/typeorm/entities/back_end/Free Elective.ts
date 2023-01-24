import {  Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'free_elective'})

export class Free_Elective{

    @PrimaryGeneratedColumn()
    id_free_elective  : number;

    @Column()
    name : string;

    @Column()
    review : string;



}