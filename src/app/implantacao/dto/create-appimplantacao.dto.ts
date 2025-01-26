import { IsDate, IsNotEmpty, IsNumber, IsString, IsOptional, IsArray, ArrayNotEmpty, IsBase64 } from "class-validator";

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
  @ArrayNotEmpty() 
  @IsString({ each: true }) 
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
