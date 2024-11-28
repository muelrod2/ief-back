import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { GerenciamentoService } from './priorizacao.service';
import { CreateGerenciamentoDto } from './dto/create-priorizacao.dto';
import { UpdateGerenciamentoDto } from './dto/update-priorizacao.dto';

@Controller('priorizacao')
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

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateGerenciamentoDto: UpdateGerenciamentoDto,){
        return this.gerenciamentoservice.update(id, updateGerenciamentoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.gerenciamentoservice.remove(id);
    }

}
