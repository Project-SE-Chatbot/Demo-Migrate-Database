import {  Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({name: 'register'})

export class Register {
    
    @PrimaryGeneratedColumn()
    id_register  : number;

    @Column()
    name : string;  

    @Column()
    link : string;

    @Column()
    tcas_round : string;

    @Column({unique: true})
    degree : string;

}