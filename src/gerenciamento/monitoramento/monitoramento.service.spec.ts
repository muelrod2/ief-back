import { Repository } from "typeorm"
import { GerenciamentoService } from "./monitoramento.service";
import { gerenciamento_monitoramento } from "./entieties/monitoramento.entities";
import { TestingModule, Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

const mockRpository = () =>({

    
    findAndCount: jest.fn(), 
    save: jest.fn(), 
    findOneBy: jest.fn(), 
    delete: jest.fn(),
});


type mockRpository<T =any> = Partial <Record<keyof Repository<T>, jest.Mock>>;

describe('GerenciamentoService',() => {
    let service: GerenciamentoService;
    let repository: mockRpository<gerenciamento_monitoramento>; //um mock do typeorm  sendo injetado no serviço

    beforeEach(async() => {
        const module: TestingModule = await Test.createTestingModule({
            providers:[
                GerenciamentoService, // registra o serviço que estamos usando
                {
                    provide: getRepositoryToken(gerenciamento_monitoramento), // regista ao mock
                    useValue: mockRpository(), // usa o mock deifinido anteiror mente
                },
            ],
        
    }).compile(); //compilando o modulo 

    service = module.get<GerenciamentoService>(GerenciamentoService);
    repository = module.get<mockRpository<gerenciamento_monitoramento>>(
        getRepositoryToken(gerenciamento_monitoramento),
    );
});    

    
    it('Serviço instanciado com sucesso!', () =>{
        expect(service).toBeDefined(); 
    });

    describe('findAll', () => {
        it('Registros retornados com sucesso!',async ()=> {
            const mockData = [{id:1 , tipo: 'Fomento'}];
            repository.findAndCount.mockResolvedValue([mockData, 1]); 
            const result = await service.findAll(1,7);

            expect(repository.findAndCount).toHaveBeenCalledWith({ 
                skip:0,
                take: 7,
            });
            expect(result).toEqual({data: mockData, total: 1}); 

        });
    });    
    
    describe('create', () =>{
        it('Criação de registros feito com sucesso!',async() => {
            const mockDto = { status: 1, tipo:'Mudas'} as any;
            const mockEntity = {id: 1, ...mockDto};
            jest.spyOn(service, 'create').mockResolvedValue(mockEntity);

            const result = await service.create( mockDto);

            expect(service.create).toHaveBeenCalledWith(mockDto);
            expect(result).toEqual(mockEntity);
        });
    });
    
    describe('update', () =>{
        it('Update feito com sucesso!', async () => {
            const mockDto = {tipo:'Mudas'};
            //teste 
            const mockEntity = {
                id: 2,
                status: 1, 
                tipo: 'Outros',
                codigo_solicitacao: 'REQ-2024728',
                area: 9,
                modulos_fiscais: 4,
                progresso: 45,
                municipio: 'Ouro Branco - MG',
                regional: 'Zona da mata',
                pdf: 'termo1_implantacao.pdf',
                criacao: new Date('2025-01-03'), 
                atualizacao: new Date('2025-01-10'), 
                app_monitoramento: {
                    id: 1,
                    nome_imovel: 'Fazenda Ouro Branco',
                    localizacao: 'Zona rural de Ouro Branco, MG',
                    area: 150.5,
                    gleba: 'Gleba A',
                    total: 200.0,
                    prazo_maximo: new Date('2025-12-31'),
                    data_implantacao: new Date('2024-01-01'),
                    metodo_recomposicao: 'Método de recomposição natural',
                    cobertura_dossel: 85.5,
                    numero_regenerantes_nativos: 200,
                    numero_especies_nativas: 25,
                    foto_panoramica: Buffer.from([]), // Foto em formato binário
                    foto_detalhada: Buffer.from([]), // Foto em formato binário
                    data_medicao: new Date('2024-12-10'),
                    criacao: new Date('2024-12-10'),
                    atualizacao: new Date('2024-12-10'),
                  }
            };
    
            jest.spyOn(service, 'update').mockResolvedValue(mockEntity);

            const result = await service.update(1, mockDto);
            
          
            expect(result).toEqual(mockEntity);
        });
    });    

    describe('remove',() => {
        it('Registro removido com sucesso!',async () =>{
            const mockMessage = 'ID 2 excluido com suceeso' ;
            jest.spyOn(service, 'remove').mockResolvedValue(mockMessage);
            const result = await service.remove(1);

            expect(service.remove).toHaveBeenCalledWith(1);
            expect(result).toEqual(mockMessage);
        });
    });
});
    