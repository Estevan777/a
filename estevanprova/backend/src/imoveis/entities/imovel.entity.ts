import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Imovel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  endereco: string;

  @Column('int')
  custo: number;
}