import internal from "stream";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'admin'})

export class Admin {
    @PrimaryGeneratedColumn()
    id_admin  : number;

    @Column()
    name  : string;

    @Column()
    password  : string;


}