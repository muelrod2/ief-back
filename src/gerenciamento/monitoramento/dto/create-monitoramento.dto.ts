import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, IsDate } from "class-validator";

export class CreateGerenciamentoDto {
    
    @IsNumber()
    @IsNotEmpty()
    status:number;

    @IsString()
    @IsNotEmpty()
    tipo: string;

    @IsString()
    @IsNotEmpty()
    codigo_solicitacao: string;

    @IsNumber()
    @IsNotEmpty()
    area:number;

    @IsNumber()
    @IsNotEmpty()
    modulos_fiscais: number;

    @IsNumber()
    @IsNotEmpty()
    progresso: number;

    @IsString()
    @IsNotEmpty()
    municipio: string;

    @IsString()
    @IsNotEmpty()
    regional: string;

    @IsUrl()
    @IsOptional()
    pdf?: string;

    @IsDate()
    @IsOptional()
    criacao: Date;

}