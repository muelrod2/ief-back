import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { app_monitoramento } from "../entieties/appmonitoramento.entities";
import { Repository } from 'typeorm';

@Injectable()

export class appimplatacao{
    constructor(
        @InjectRepository(app_monitoramento)
        private readonly userRepository: Repository<app_monitoramento>,

    ){}

     findAll(): Promise<app_monitoramento[]> {
        return this.userRepository.find();
      }
    
      findOne(id: number): Promise<app_monitoramento> {
        return this.userRepository.findOne({ where: { id } });
      }
    
      create(user: app_monitoramento): Promise<app_monitoramento> {
        return this.userRepository.save(user);
      }
    
      async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
      }
}