import { Controller, Post, Body, Get, Patch, Param, Delete, Query } from '@nestjs/common';
import { AppimplantacaoService  } from './appimplantacao.service';
import { CreateappDto } from './dto/create-appimplantacao.dto';
import { UpdateappDto } from './dto/update-appimplantacao.dto';

@Controller('app/implantacao')
export class AppimplantacaoController {
  constructor(private readonly AppimplantacaoService : AppimplantacaoService ) {}

  @Post()
  create(@Body() CreateappDto: CreateappDto) {
    return this.AppimplantacaoService .create(CreateappDto);
  }

  @Get()
  findAll(@Query('page') page = 1, @Query('pageSize') pageSize = 7) {
  return this.AppimplantacaoService .findAll(page, pageSize);
}

  @Patch(':id')
  update(
    @Param('id') id: number, // Pega o ID da URL
    @Body() UpdateappDto: UpdateappDto, // Dados do corpo
  ) {
    return this.AppimplantacaoService .update(id, UpdateappDto);
  }

  @Delete(':id') 
  remove(@Param('id') id: number) {
    return this.AppimplantacaoService .remove(id);
  }
}
