import { Controller, Post, Body, Get, Patch, Param, Delete } from '@nestjs/common';
import { GerenciamentoService } from './aprovacao.service';
import { CreateGerenciamentoDto } from './dto/create-aprovacao.dto';
import { UpdateGerenciamentoDto } from './dto/update-aprovacao.dto';

@Controller('aprovacao')
export class GerenciamentoController {
  constructor(private readonly gerenciamentoService: GerenciamentoService) {}

  @Post()
  create(@Body() createGerenciamentoDto: CreateGerenciamentoDto) {
    return this.gerenciamentoService.create(createGerenciamentoDto);
  }

  @Get() 
  findAll() {
    return this.gerenciamentoService.findAll();
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
