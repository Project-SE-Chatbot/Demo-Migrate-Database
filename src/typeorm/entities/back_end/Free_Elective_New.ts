import {  Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Major } from "./Major";


@Entity({name: 'free_elective_new'})

export class Free_Elective_New{

    @PrimaryGeneratedColumn()
    id_free_elective  : number;

    @Column()
    course_code: number;

    @Column()
    name : string;

    @Column()
    name_thai : string;

    @Column()
    link_description : string;

    @ManyToOne(() => Major, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    Major: number;
}