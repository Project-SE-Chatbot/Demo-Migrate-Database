import {  Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'register'})

export class Register {
    
    @PrimaryGeneratedColumn()
    id_register  : number;

    @Column()
    degree : number;

    

}