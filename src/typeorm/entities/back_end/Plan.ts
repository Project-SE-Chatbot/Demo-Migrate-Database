import {  Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'plan'})

export class Plan{

    @PrimaryGeneratedColumn()
    id_plan: number;

    @Column()
    link: string;


}