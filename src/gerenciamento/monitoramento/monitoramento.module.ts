import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GerenciamentoController } from './monitoramento.contoller';
import { GerenciamentoService } from './monitoramento.service';
import { gerenciamento_monitoramento } from './entieties/monitoramento.entities';

@Module({

    imports: [TypeOrmModule.forFeature([gerenciamento_monitoramento])],
    controllers: [GerenciamentoController],
    providers: [GerenciamentoService],
})
export class MonitoramentoModule {}
