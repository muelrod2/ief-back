import { IsBase64, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateappDto {

    @IsString()
    @IsNotEmpty()
    nome_imovel: string;

    @IsString()
    @IsNotEmpty()
    localizacao: string;

    @IsNumber()
    @IsNotEmpty()
    area: number;

    @IsString()
    @IsNotEmpty()
    gleba: string;

    @IsNumber()
    @IsNotEmpty()
    total: number;
    
    @IsDate()
    @IsNotEmpty()
    prazo_maximo: Date;

    @IsDate()
    @IsNotEmpty()
    data_implantacao: Date;

    @IsString()
    @IsNotEmpty()
    metodo_recomposicao: string;

    @IsNumber()
    @IsNotEmpty()
    cobertura_dossel: number;

    @IsNumber()
    @IsNotEmpty()
    numero_regenerantes_nativos: number;

    @IsNumber()
    @IsNotEmpty()
    numero_especies_nativas: number;

    @IsBase64()
    @IsNotEmpty()
    foto_panoramica: string;
 
    @IsBase64()
    @IsNotEmpty()
    foto_detalhada: string;

    @IsDate()
    @IsNotEmpty()
    data_medicao: Date;

    @IsDate()
    @IsOptional()
    criacao: Date;
}