import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { GerenciamentoService } from './implantacao.service';
import { CreateGerenciamentoDto } from './dto/create-implantacao.dto';
import { UpdateGerenciamentoDto } from './dto/update-implantacao.dto';

@Controller('implantacao')
export class GerenciamentoController {

    constructor(private readonly gerenciamentoservice: GerenciamentoService){}

    @Post()
    create(@Body() createGerenciamentoDto :CreateGerenciamentoDto){
        return this.gerenciamentoservice.create(createGerenciamentoDto)
    }

    @Get()
    findAll(){
        return this.gerenciamentoservice.findAll();
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateGerenciamentoDto: UpdateGerenciamentoDto,){
        return this.gerenciamentoservice.update(id, updateGerenciamentoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.gerenciamentoservice.remove(id);
    }

}