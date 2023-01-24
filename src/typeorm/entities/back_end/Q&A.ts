import {  Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'q_and_a'})

export class Q_And_A{
    @PrimaryGeneratedColumn()
    id_q_and_a : number;

    // ???
    @Column()
    question: string;
    // ???
    @Column()
    anser: string;

    

}