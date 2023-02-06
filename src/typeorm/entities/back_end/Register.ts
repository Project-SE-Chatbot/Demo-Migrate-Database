import {  Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Degree } from "./Degree";

@Entity({name: 'register'})

export class Register {
    
    @PrimaryGeneratedColumn()
    id_register  : number;

    @Column({unique: true})
    degree : string;

    @OneToMany(() => Degree, (degree) => degree.register, {onDelete: "CASCADE", onUpdate: "CASCADE"})   
    info: Degree[]

}