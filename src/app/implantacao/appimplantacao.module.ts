import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppimplantacaoController } from './appimplantacao.controller';
import {  AppimplantacaoService  } from './appimplantacao.service';
import { app_implantacao } from './entieties/appimplantacao.entities';
@Module({

    imports: [TypeOrmModule.forFeature([app_implantacao])],
    controllers: [AppimplantacaoController],
    providers: [ AppimplantacaoService ],
})
export class AppimplantacaoModule {}
