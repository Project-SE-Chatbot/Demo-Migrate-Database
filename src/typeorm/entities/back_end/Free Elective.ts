import {  Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Major } from "./Major";

@Entity({name: 'free_elective'})

export class Free_Elective{

    @PrimaryGeneratedColumn()
    id_free_elective  : number;

    @Column()
    name : string;

    @Column()
    review : string;

    @ManyToOne(() => Major, (major) => major.review, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    major: Major

}