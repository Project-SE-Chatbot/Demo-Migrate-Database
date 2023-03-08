import {  Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'place'})

export class Place{

    @PrimaryGeneratedColumn()
    id_place   : number;

    @Column()
    building  : string;

    @Column()
    floor : string

    @Column()
    room : string;

    @Column()
    link_location : string;

    

}