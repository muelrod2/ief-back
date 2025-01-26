import { app_monitoramento } from "src/app/monitoramento/entieties/appmonitoramento.entities";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class gerenciamento_monitoramento {
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
    progresso: number;

    @Column()
    municipio: string;

    @Column()
    regional: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    pdf?: string; 
    
     // Relacionamento com a tabela app_monitoramento
    @ManyToOne(() => app_monitoramento, (appMonitoramento) => appMonitoramento.id)
    @JoinColumn({ name: "app_gerenciamentoId" })  // Nome da coluna de chave estrangeira
    app_monitoramento: app_monitoramento;

    @Column({ type: 'timestamp', nullable: true })
    criacao: Date;

    @Column({ type: 'timestamp', nullable: true })
    atualizacao: Date;
}