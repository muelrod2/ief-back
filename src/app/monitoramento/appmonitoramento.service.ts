import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { app_monitoramento } from './entieties/appmonitoramento.entities';
import { CreateappDto } from './dto/create-appmonitoramento.dto';
import { UpdateappDto } from './dto/update-appmonitoramento.dto';

@Injectable()
export class AppmonitoramentoService {
  constructor(
    @InjectRepository(app_monitoramento)
    private readonly appRepository: Repository<app_monitoramento>,
  ) {}

  async create(CreateappDto: CreateappDto): Promise<app_monitoramento> {
      try {
        const {
          foto_panoramica,
          foto_detalhada,
          ...otherData
        } = CreateappDto; // Extrai as propriedades do DTO
    
        const newRecord = this.appRepository.create({
          ...otherData, // Insere as outras propriedades do DTO
          foto_panoramica: foto_panoramica && this.convertBase64ToBuffer(foto_panoramica), // Converte base64 para Buffer, se fornecido
          foto_detalhada: foto_detalhada && this.convertBase64ToBuffer(foto_detalhada), // Converte base64 para Buffer, se fornecido
          criacao: new Date(), // Adiciona a data atual ao campo 'criacao''
        });
    
        return await this.appRepository.save(newRecord);
      } catch (error) {
        console.error('Error saving monitoramento:', error);
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
    ): Promise<app_monitoramento> {
      const existingRecord = await this.appRepository.findOneBy({ id });
    
      if (!existingRecord) {
        throw new NotFoundException(`Record with ID ${id} not found`);
      }
    
      const { foto_panoramica, foto_detalhada, ...otherData } = updateAppDto;
    
      Object.assign(existingRecord, otherData, {
        atualizacao: new Date(),
        ...(foto_panoramica && { foto_panoramica: this.convertBase64ToBuffer(foto_panoramica) }), // Converte base64 para Buffer
      ...(foto_detalhada && { foto_detalhada: this.convertBase64ToBuffer(foto_detalhada) }),  
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

   // Função para converter base64 em Buffer
   private convertBase64ToBuffer(base64: string): Buffer {
    // Valida se a string base64 não está vazia e é válida
    if (!base64 || base64.trim() === '') {
      throw new Error('Invalid base64 string');
    }
    return Buffer.from(base64, 'base64');
  }
}
