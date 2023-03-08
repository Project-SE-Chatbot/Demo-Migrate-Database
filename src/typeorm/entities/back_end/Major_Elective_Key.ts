import {  Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'major_elective_key'})

export class Major_Elective_Key{
    @PrimaryGeneratedColumn()
    id_major_elective_key: number;
    
    @Column()
    key_1: string

    @Column({ nullable: true })
    key_2: string

    @Column({ nullable: true })
    key_3: string

    @Column({ nullable: true })
    key_4: string

    @Column({ nullable: true })
    key_5: string

    @Column({ nullable: true })
    key_6: string



}
