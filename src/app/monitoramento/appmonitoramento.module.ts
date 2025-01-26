import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppmonitoramentoController } from './appmonitoramento.controller';
import {  AppmonitoramentoService  } from './appmonitoramento.service';
import { app_monitoramento } from './entieties/appmonitoramento.entities';

@Module({

    imports: [TypeOrmModule.forFeature([app_monitoramento])],
    controllers: [AppmonitoramentoController],
    providers: [ AppmonitoramentoService ],
})
export class AppmonitoramentoModule {}
