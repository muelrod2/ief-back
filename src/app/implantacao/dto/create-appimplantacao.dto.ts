import { IsDate, IsNotEmpty, isNumber, IsNumber, IsString, IsOptional, IsArray, ArrayNotEmpty, IsBase64} from "class-validator";

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

    @IsNumber()
    @IsNotEmpty()
    efetivado: number;

    @IsString()
    @IsNotEmpty()
    metodo_recomposicao: string;

    @IsArray()
    @ArrayNotEmpty() // Opcional: garante que o array não esteja vazio
    @IsString({ each: true }) // Valida que cada elemento do array seja uma string
    acoes_efetuadas: string[];

    @IsDate()
    @IsNotEmpty()
    periodo_inicio: Date;

    @IsDate()
    @IsNotEmpty()
    periodo_fim: Date;

    @IsNumber()
    @IsNotEmpty()
    area_implantada: number;

    @IsBase64()
    @IsNotEmpty()
    foto_panoramica: string;

    @IsBase64()
    @IsNotEmpty()
    foto_detalhada: string;

    @IsDate()
    @IsOptional()
    criacao: Date;
    
}