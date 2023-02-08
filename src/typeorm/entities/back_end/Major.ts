import { IsNotEmpty } from "class-validator";
import {  Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Free_Elective } from "./Free Elective";
import { Place } from "./Place";

@Entity({name: 'major'})

export class Major{

    @PrimaryGeneratedColumn()
    id_major: number;
    
    @Column({unique: true})
    @IsNotEmpty()
    course_code: string

    @Column({unique: true})
    @IsNotEmpty()
    name: string

    @Column()
    @IsNotEmpty()
    name_teacher: string;

    @Column()
    @IsNotEmpty()
    term: string;

    @Column()
    @IsNotEmpty()
    place : string;

    @Column()
    @IsNotEmpty()
    day  : string;
    
    @Column()
    @IsNotEmpty()
    time  : string;

    @OneToOne(() => Place, (place) => place.major, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    @JoinColumn()
    place_study: Place

    @OneToMany(() => Free_Elective, (freeElective) => freeElective.major, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    review: Free_Elective[]
}