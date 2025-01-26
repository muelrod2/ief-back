import { Controller, Post, Body, Get, Patch, Param, Delete, Query } from '@nestjs/common';
import { AppimplantacaoService } from './appimplantacao.service';
import { CreateappDto } from './dto/create-appimplantacao.dto';
import { UpdateappDto } from './dto/update-appimplantacao.dto';

@Controller('app/implantacao')
export class AppimplantacaoController {
  constructor(private readonly appimplantacaoService: AppimplantacaoService) {}

  @Post()
  async create(@Body() createappDto: CreateappDto) {
    return this.appimplantacaoService.create(createappDto);
  }

  @Get()
  async findAll(@Query('page') page = 1, @Query('pageSize') pageSize = 7) {
    return this.appimplantacaoService.findAll(page, pageSize);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateappDto: UpdateappDto) {
    return this.appimplantacaoService.update(id, updateappDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.appimplantacaoService.remove(id);
  }
}
