import internal from "stream";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'faq'})

export class Faq{
    @PrimaryGeneratedColumn()
    id_faq: number;

    @Column()
    question: string;

    @Column()
    answer: string;

    @Column()
    frequency: number;

    @Column()
    tag: string;

}