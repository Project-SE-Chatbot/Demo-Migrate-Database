import {  Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Major } from "./Major";

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

    @OneToMany(() => Major, (major) => major.place, {onDelete: "SET NULL", onUpdate: "CASCADE"})
    major: Major[]

    

}