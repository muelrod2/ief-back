import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { app_implantacao } from './entieties/appimplantacao.entities';
import { CreateappDto } from './dto/create-appimplantacao.dto';
import { UpdateappDto } from './dto/update-appimplantacao.dto';

@Injectable()
export class AppimplantacaoService {
  constructor(
    @InjectRepository(app_implantacao)
    private readonly appRepository: Repository<app_implantacao>,
  ) {}

  async create(CreateappDto: CreateappDto): Promise<app_implantacao> {
    try {
      const {
        foto_panoramica,
        foto_detalhada,
        ...otherData
      } = CreateappDto; // Extrai as propriedades do DTO
  
      const newRecord = this.appRepository.create({
        ...otherData, // Insere as outras propriedades do DTO
        foto_panoramica: Buffer.from(foto_panoramica, 'base64'), // Converte base64 para Buffer
        foto_detalhada: Buffer.from(foto_detalhada, 'base64'),   // Converte base64 para Buffer
        criacao: new Date(), // Adiciona a data atual ao campo 'criacao'
      });
  
      return await this.appRepository.save(newRecord);
    } catch (error) {
      console.error('Error saving implantacao:', error);
      throw error; 
    }
  }
  
 
  async findAll(page: number = 1, pageSize: number = 7) {
    const [data, total] = await this.appRepository.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    return {
      data,
      total,
    };
  }

  async update(
    id: number,
    updateAppDto: UpdateappDto,
  ): Promise<app_implantacao> {
    const existingRecord = await this.appRepository.findOneBy({ id });
  
    if (!existingRecord) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
  
    const { foto_panoramica, foto_detalhada, ...otherData } = updateAppDto;
  
    Object.assign(existingRecord, otherData, {
      atualizacao: new Date(),
      ...(foto_panoramica && { foto_panoramica: Buffer.from(foto_panoramica, 'base64') }), // Converte base64 para Buffer
      ...(foto_detalhada && { foto_detalhada: Buffer.from(foto_detalhada, 'base64') }),   // Converte base64 para Buffer
    });
  
    return this.appRepository.save(existingRecord);
  }
  

  async remove(id: number): Promise<string> {
    const result = await this.appRepository.delete(id); // Remove o registro

    if (result.affected === 0) {
      // Se nenhum registro foi afetado, o ID não existe
      throw new NotFoundException(`ID ${id} não encontrado`);
    }

    return `ID ${id} excluído com sucesso`;
  }
}
