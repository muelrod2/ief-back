import { Controller, Post, Body, Get, Patch, Param, Delete, Query } from '@nestjs/common';
import { GerenciamentoService } from './monitoramento.service';
import { CreateGerenciamentoDto } from './dto/create-monitoramento.dto';
import { UpdateGerenciamentoDto } from './dto/update-monitoramento.dto';

@Controller('gerenciamento/monitoramento')
export class GerenciamentoController {
  constructor(private readonly gerenciamentoService: GerenciamentoService) {}

  @Post()
  create(@Body() createGerenciamentoDto: CreateGerenciamentoDto) {
    return this.gerenciamentoService.create(createGerenciamentoDto);
  }

 /* Antigo get
  @Get() 
  findAll() {
    return this.gerenciamentoService.findAll();
  }
  */

  @Get()
  findAll(@Query('page') page = 1, @Query('pageSize') pageSize = 7) {
  return this.gerenciamentoService.findAll(page, pageSize);
}

  @Patch(':id')
  update(
    @Param('id') id: number, // Pega o ID da URL
    @Body() updateGerenciamentoDto: UpdateGerenciamentoDto, // Dados do corpo
  ) {
    return this.gerenciamentoService.update(id, updateGerenciamentoDto);
  }

  @Delete(':id') // Rota: DELETE /gerenciamento/:id
  remove(@Param('id') id: number) {
    return this.gerenciamentoService.remove(id);
  }
}
