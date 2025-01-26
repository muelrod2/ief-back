import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { app_implantacao } from "../entieties/appimplantacao.entities";
import { Repository } from 'typeorm';

@Injectable()

export class appimplatacao{
    constructor(
        @InjectRepository(app_implantacao)
        private readonly userRepository: Repository<app_implantacao>,

    ){}

     findAll(): Promise<app_implantacao[]> {
        return this.userRepository.find();
      }
    
      findOne(id: number): Promise<app_implantacao> {
        return this.userRepository.findOne({ where: { id } });
      }
    
      create(user: app_implantacao): Promise<app_implantacao> {
        return this.userRepository.save(user);
      }
    
      async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
      }
}