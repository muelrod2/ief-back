import { app_implantacao } from "src/app/implantacao/entieties/appimplantacao.entities";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class gerenciamento_implantacao{
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
    ano: string;

    @Column()
    progresso: number;

    @Column()
    municipio: string;

    @Column()
    regional: string;

    @Column({ type: 'text', nullable: true })
    pdf: string;

    // Relacionamento com a tabela app_implantacao
     @ManyToOne(() => app_implantacao, (appImplantacao) => appImplantacao.id)
    @JoinColumn({ name: "app_gerenciamentoId" })  // Nome da coluna de chave estrangeira
    app_implantacao: app_implantacao;

    @Column({ type: 'timestamp', nullable: true })
    criacao: Date;
  
    @Column({ type: 'timestamp', nullable: true })
    atualizacao: Date;

}
