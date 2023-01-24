import internal from "stream";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'degree'})

export class Degree{
    @PrimaryGeneratedColumn()
    id_degree : number;

    @Column()
    time : string;

    @Column()
    Amount : string;

    @Column()
    link : string;

}