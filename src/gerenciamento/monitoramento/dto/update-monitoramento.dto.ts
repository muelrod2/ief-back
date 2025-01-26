import { IsOptional, IsNumber, IsString, IsUrl,IsDate} from "class-validator";

export class UpdateGerenciamentoDto{

        @IsNumber()
        @IsOptional()
        status?:number;
    
        @IsString()
        @IsOptional()
        tipo?: string;
    
        @IsString()
        @IsOptional()
        codigo_solicitacao?: string;
    
        @IsNumber()
        @IsOptional()
        area?:number;
    
        @IsNumber()
        @IsOptional()
        modulos_fiscais?: number;
    
        @IsNumber()
        @IsOptional()
        progresso?: number;
    
        @IsString()
        @IsOptional()
        municipio?: string;
    
        @IsString()
        @IsOptional()
        regional?: string;
    
        @IsUrl()
        @IsOptional()
        pdf?: string;

        @IsDate()
        @IsOptional()
        atualizacao?: Date;
}