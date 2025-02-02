import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class gerenciamento_aprovacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: number;

  @Column()
  tipo: string;

  @Column()
  codigo_solicitacao: string;

  @Column({ type: "float", default: 0, nullable: false })
  area: number;

  @Column({ type: "float", default: 0, nullable: false })
  modulos_fiscais: number;

  @Column()
  municipio: string;

  @Column()
  regional: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  pdf?: string;  

  @Column({ type: 'varchar', length: 255, nullable: true })
  localizacao?: string; 

  @Column({ type: 'timestamp', nullable: true })
  criacao: Date;

  @Column({ type: 'timestamp', nullable: true })
  atualizacao: Date;
}
