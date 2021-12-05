import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    plate: string;
    
    @Column()
    model: string;

    @Column()
    brand: string;

    @Column()
    type: string;
}