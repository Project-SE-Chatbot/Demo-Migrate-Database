import internal from "stream";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'feedback'})

export class Feedback  {
    @PrimaryGeneratedColumn()
    id_feedback   : number;

    @Column()
    question   : string;

    @Column()
    answer   : string;

    @Column()
    score    : number;

    @Column()
    feedback    : string;

}