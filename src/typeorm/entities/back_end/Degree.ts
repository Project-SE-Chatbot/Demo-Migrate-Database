import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Register } from "./Register";

@Entity({name: 'degree'})

export class Degree{
    @PrimaryGeneratedColumn()
    id_degree : number;

    @Column()
    name : string;

    @Column()
    link : string;

    @ManyToOne(() => Register, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    register: number

}