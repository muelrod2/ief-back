import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class app_implantacao{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome_imovel: string;
    
    @Column()
    localizacao: string;
    
    @Column({ type: "float", default: 0, nullable: false })
    area: number;

    @Column()
    gleba: string;

    @Column({ type: "float", default: 0, nullable: false })
    total: number;
    
    @Column({ type: 'timestamp', nullable: true })
    prazo_maximo: Date;
    
    @Column()
    efetivado: number;
    
    @Column()
    metodo_recomposicao: string;
    
    @Column("text", { array: true }) // lista de string
    acoes_efetuadas: string[];
    
    @Column({ type: 'timestamp', nullable: true })
    periodo_inicio: Date;
    
    @Column({ type: 'timestamp', nullable: true })
    periodo_fim: Date;
    
    @Column({ type: "float", default: 0, nullable: false })
    area_implantada: number;
    
    @Column("bytea") //conjunto de bytes
    foto_panoramica:  Buffer;
    
    @Column("bytea")   
    foto_detalhada: Buffer;

    @Column({ type: 'timestamp', nullable: true })
    criacao: Date;
  
    @Column({ type: 'timestamp', nullable: true })
    atualizacao: Date;
}