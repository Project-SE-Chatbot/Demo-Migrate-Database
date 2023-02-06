import {  Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Major } from "./Major";

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

    @OneToOne(() => Major, (major) => major.place_study, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    major: Major

}