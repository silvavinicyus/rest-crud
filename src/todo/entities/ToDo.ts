import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('todo')
export class ToDo extends BaseEntity {   
    @PrimaryGeneratedColumn('uuid')
    id: string;
   
    @Column()
    name: string;
   
    @Column()
    hours: string;
   
    @CreateDateColumn()
    created_at: Date;
   
    @UpdateDateColumn()
    updated_at: Date;
}