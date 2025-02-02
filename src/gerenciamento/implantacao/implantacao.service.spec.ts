import { Repository } from "typeorm"
import { GerenciamentoService } from "./implantacao.service";
import { gerenciamento_implantacao } from "./entities/implantacao.entities";
import { TestingModule, Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";



const mockRpository = () =>({

    //criando um mock - jest.fn criar uma função simulada para retornar valores e verificaçoes
    findAndCount: jest.fn(), //encotrar e contar quantos registros foram encotrados
    save: jest.fn(), // salva no banco de dados 
    findOneBy: jest.fn(), // busca um registro aprtir de um filtro
    delete: jest.fn(), // exclui a entidade do banco 
});

//mockrepository é um tipo que definie o mock 
// keyof repsoturo<T> recbem todas os metodos disposniveis (find,save,delete...)
//record cria um objetos onde cada metodos od repsositorio sera uma função mokca
type mockRpository<T =any> = Partial <Record<keyof Repository<T>, jest.Mock>>;

//descrevebdo um oc==conjunto de teste relacioandos ao gerenicamento service
describe('GerenciamentoService',() => {
    let service: GerenciamentoService;
    let repository: mockRpository<gerenciamento_implantacao>; //um mock do typeorm  sendo injetado no serviço

    beforeEach(async() => {
        const module: TestingModule = await Test.createTestingModule({
            providers:[
                GerenciamentoService, // registra o serviço que estamos usando
                {
                    provide: getRepositoryToken(gerenciamento_implantacao), // regista ao mock
                    useValue: mockRpository(), // usa o mock deifinido anteiror mente
                },
            ],
        
    }).compile(); //compilando o modulo 

    service = module.get<GerenciamentoService>(GerenciamentoService);
    repository = module.get<mockRpository<gerenciamento_implantacao>>(
        getRepositoryToken(gerenciamento_implantacao),
    );
});    

    // teste para ver se o serviços foi isntanciado
    it('Serviço instanciado com sucesso!', () =>{
        expect(service).toBeDefined(); // garante que a instancia do serviço nao seja sem definição
    });

    describe('findAll', () => {
        it('Registros retornados com sucesso!',async ()=> {
            const mockData = [{id:1 , tipo: 'Fomento'}];
            repository.findAndCount.mockResolvedValue([mockData, 1]); // codfirar o mock para simular o retonro esprado  do fundandcount
        
            const result = await service.findAll(1,7);

            expect(repository.findAndCount).toHaveBeenCalledWith({ //verifica o mentdo findandcount foi chaamdo com os argumento corretos
                skip:0,
                take: 7,
            });
            expect(result).toEqual({data: mockData, total: 1}); // ga q o retorno do serviço esta correto

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
                ano: "(2/12)",
                progresso: 45,
                municipio: 'Ouro Branco - MG',
                regional: 'Zona da mata',
                pdf: 'termo1_implantacao.pdf',
                criacao: new Date('2024-12-10'), 
                atualizacao: new Date('2024-12-10'),
                app_implantacao: {
                    id: 1,
                    nome_imovel: 'Fazenda Ouro Branco',
                    localizacao: 'Zona rural de Ouro Branco, MG',
                    area: 150.5,
                    gleba: 'Gleba A',
                    total: 200.0,
                    prazo_maximo: new Date('2025-12-31'),
                    efetivado: 75,
                    metodo_recomposicao: 'Método de recomposição natural',
                    acoes_efetuadas: ['Plantio de mudas', 'Revegetação'],
                    periodo_inicio: new Date('2024-01-01'),
                    periodo_fim: new Date('2025-12-31'),
                    area_implantada: 100.0,
                    foto_panoramica: Buffer.from([]),  
                    foto_detalhada: Buffer.from([]), // Foto em formato binário
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
    