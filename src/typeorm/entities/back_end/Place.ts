import {  Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'place'})

export class Place{

    @PrimaryGeneratedColumn()
    id_place   : number;

    @Column()
    building  : string;

    @Column()
    room   : string;

    @Column()
    location   : string;

}