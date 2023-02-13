import { IsNotEmpty } from "class-validator";
import {  Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Free_Elective } from "./Free Elective";
import { Place } from "./Place";
import { Teacher } from "./Teacher";

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

    @ManyToMany(() => Teacher, (teacher) => teacher.major, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    @JoinTable()
    teacher: Teacher[];

    @Column()
    @IsNotEmpty()
    term: string;

    @ManyToOne(() => Place, (place) => place.major, {onDelete: "SET NULL", onUpdate: "CASCADE"})
    place: Place

    @Column()
    @IsNotEmpty()
    day  : string;
    
    @Column()
    @IsNotEmpty()
    time  : string;

    @OneToMany(() => Free_Elective, (freeElective) => freeElective.major, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    review: Free_Elective[]
}