import { IsBase64, IsDate, IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateappDto{

    @IsString()
    @IsOptional()
    nome_imovel?: string;
    
    @IsString()
    @IsOptional()
    localizacao?: string;
    
    @IsNumber()
    @IsOptional()
    area?: number;

    @IsString()
    @IsOptional()
    gleba?: string;
    
    @IsNumber()
    @IsOptional()
    total?: number;
        
    @IsDate()
    @IsOptional()
    prazo_maximo?: Date;
    
    @IsDate()
    @IsOptional()
    data_implantacao?: Date;
    
    
    @IsString()
    @IsOptional()
    metodo_recomposicao?: string;
    
    @IsNumber()
    @IsOptional()
    cobertura_dossel?: number;
    
    @IsNumber()
    @IsOptional()
    numero_regenerantes_nativos?: number;
    
    @IsNumber()
    @IsOptional()
    numero_especies_nativas?: number;
    
    @IsBase64()
    @IsOptional()
    foto_panoramica?: string;
    
    @IsBase64()
    @IsOptional()
    foto_detalhada?: string;
    
    @IsDate()
    @IsOptional()
    data_medicao?: Date;
    
    @IsDate()
    @IsOptional()
    atualizacao?: Date;
}