import {  Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'free_elective_key'})

export class Free_Elective_Key{
    @PrimaryGeneratedColumn()
    id_free_elective_key: number;
    
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
