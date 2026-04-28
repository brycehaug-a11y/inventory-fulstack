import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Column } from "typeorm/browser";

@Entity()
export class InventoryItem {
  @PrimaryGeneratedColumn()
  id!: number;


@Column({length: 250})
name!: string;

@Column({length: 500})
description?: string;

@Column({length: 80})
imageUrl?: string;

@Column({length: 25, unique: true, nullable: false})
skull!: string;

@Column({length: "double", nullable:false})
price!: number;

@Column({type: "int", nullable: false})
stockQuantity!: number;

@Column({type: "text"})
availableMedium?: "Online" | "In-Store"

@Column({type:"boolean"})
isActive!: boolean

@CreateDateColumn()
createAt!: Date

@CreateDateColumn()
updatedAt!: Date
}