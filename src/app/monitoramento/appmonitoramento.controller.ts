import { Controller, Post, Body, Get, Patch, Param, Delete, Query } from '@nestjs/common';
import {  AppmonitoramentoService  } from './appmonitoramento.service';
import { CreateappDto } from './dto/create-appmonitoramento.dto';
import { UpdateappDto } from './dto/update-appmonitoramento.dto';

@Controller('app/monitoramento')
export class AppmonitoramentoController {
  constructor(private readonly  AppmonitoramentoService :  AppmonitoramentoService ) {}

  @Post()
  create(@Body() CreateappDto: CreateappDto) {
    return this. AppmonitoramentoService .create(CreateappDto);
  }

  @Get()
  findAll(@Query('page') page = 1, @Query('pageSize') pageSize = 7) {
  return this. AppmonitoramentoService .findAll(page, pageSize);
}

  @Patch(':id')
  update(
    @Param('id') id: number, 
    @Body() UpdateappDto: UpdateappDto, 
  ) {
    return this. AppmonitoramentoService .update(id, UpdateappDto);
  }

  @Delete(':id') 
  remove(@Param('id') id: number) {
    return this. AppmonitoramentoService .remove(id);
  }
}
