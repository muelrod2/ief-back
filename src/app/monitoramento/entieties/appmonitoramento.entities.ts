import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class app_monitoramento {

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
    
    @Column()
    total: number;
        
    @Column()
    prazo_maximo: Date;
    
    @Column()
    data_implantacao: Date;
    
    @Column()
    metodo_recomposicao: string;
    
    @Column({ type: "float", default: 0, nullable: false })
    cobertura_dossel: number;
    
    @Column({ type: "float", default: 0, nullable: false }) 
    numero_regenerantes_nativos: number;
    
    @Column()
    numero_especies_nativas: number;
    
    @Column("bytea") //conjunto de bytes
    foto_panoramica:  Buffer;
    
    @Column("bytea")   
    foto_detalhada: Buffer;
    
    @Column()
    data_medicao: Date;
    
    @Column({ type: 'timestamp', nullable: true })
    criacao: Date;
          
    @Column({ type: 'timestamp', nullable: true })
    atualizacao: Date;
        
}