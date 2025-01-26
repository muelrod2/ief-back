import { IsArray, IsBase64, IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateappDto {

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
    
    @IsNumber()
    @IsOptional()
    efetivado?: number;
    
    @IsString()
    @IsOptional()
    metodo_recomposicao?: string;
    
    @IsOptional()
    @IsArray()
    @IsString({ each: true }) // vai valida cada elemento do array, se for fornecido, seja um tipo string
    acoes_efetuadas?: string[];
    
    @IsDate()
    @IsOptional()
    periodo_inicio?: Date;
    
    @IsDate()
    @IsOptional()
    periodo_fim?: Date;
    
    @IsNumber()
    @IsOptional()
    area_implantada?: number;

    @IsBase64()
    @IsOptional()
    foto_panoramica?: string;

    @IsBase64()
    @IsOptional()
    foto_detalhada?: string;

    @IsDate()
    @IsOptional()
    atualizacao?: Date;
}