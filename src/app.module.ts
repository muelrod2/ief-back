import { Module } from '@nestjs/common'; 
import { AppController } from './app.controller'; 
import { AppService } from './app.service'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { gerenciamento_aprovacao } from './gerenciamento/aprovacao/entieties/aprovacao.entities';
import { AprovacaoModule } from './gerenciamento/aprovacao/aprovacao.module';
import { gerenciamento_priorizacao } from './gerenciamento/priorizacao/entities/priorizacao.entities';
import { PriorizacaoModule } from './gerenciamento/priorizacao/priorizacao.module';
import { gerenciamento_implantacao } from './gerenciamento/implantacao/entities/implantacao.entities';
import { ImplantacaoModule } from './gerenciamento/implantacao/implantacao.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',       // Endereço do servidor do banco de dados
      port: 5432,              // Porta padrão do PostgreSQL
      username: 'postgres', // Nome do usuário do banco de dados
      password: 'postgres',   // Senha do banco de dados
      database: 'postgres', // Nome do banco de dados
      entities: [gerenciamento_aprovacao, gerenciamento_priorizacao, gerenciamento_implantacao], // Entidades
      synchronize: true,       // Sincroniza o esquema do banco de dados, apenas para desenvolvimento
      logging: true, //Ativa logs para visualizarmos possíveis erros
    }),
    AprovacaoModule,
    PriorizacaoModule,
    ImplantacaoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
