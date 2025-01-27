import { Test, TestingModule } from '@nestjs/testing';
import { AppimplantacaoController } from './appimplantacao.controller';
import { AppimplantacaoService } from './appimplantacao.service';

const mockService = () => ({
  findAll: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
});

describe('AppimplantacaoController', () => {
  let controller: AppimplantacaoController;
  let service: jest.Mocked<AppimplantacaoService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppimplantacaoController],
      providers: [
        { provide: AppimplantacaoService, useValue: mockService() },
      ],
    }).compile();

    controller = module.get<AppimplantacaoController>(AppimplantacaoController);
    service = module.get<AppimplantacaoService>(AppimplantacaoService) as jest.Mocked<AppimplantacaoService>;
  });

  it('Serviço instanciado com sucesso!', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('Registros retornados com sucesso!', async () => {
      const mockResult = { data: [], total: 0 };
      service.findAll.mockResolvedValue(mockResult);

      const result = await controller.findAll(1, 7);

      expect(service.findAll).toHaveBeenCalledWith(1, 7);
      expect(result).toEqual(mockResult);
    });
  });

  describe('create', () => {
    it('Criação de registros feito com sucesso!', async () => {
      const mockDto = { status: 1, tipo: 'Novo' } as any;
      const mockEntity = { id: 1, ...mockDto };
      service.create.mockResolvedValue(mockEntity);

      const result = await controller.create(mockDto);

      expect(service.create).toHaveBeenCalledWith(mockDto);
      expect(result).toEqual(mockEntity);
    });
  });

  describe('update', () => {
    it('Update feito com sucesso!', async () => {
      const mockDto = {
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
        foto_panoramica: Buffer.from('abc123', 'utf-8').toString('base64'),  // Convertido para base64
        foto_detalhada: Buffer.from('xyz456', 'utf-8').toString('base64'),
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
          foto_panoramica: Buffer.from('abc123', 'utf-8').toString('base64'),  // Convertido para base64
          foto_detalhada: Buffer.from('xyz456', 'utf-8').toString('base64'),
          criacao: new Date('2024-12-10'),
          atualizacao: new Date('2024-12-10'),
        },
      };
  
      const mockEntity = {
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
        foto_panoramica: Buffer.from('abc123', 'utf-8'),  
        foto_detalhada: Buffer.from('xyz456', 'utf-8'),   
        criacao: new Date('2024-12-10'),
        atualizacao: new Date('2024-12-10'),
        app_implantacao: {
          // Dados do app_implantacao
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
          foto_panoramica: Buffer.from('abc123', 'utf-8'),  
          foto_detalhada: Buffer.from('xyz456', 'utf-8'),   
          criacao: new Date('2024-12-10'),
          atualizacao: new Date('2024-12-10'),
        },
    }
  
      jest.spyOn(service, 'update').mockResolvedValue(mockEntity);
  
      const result = await controller.update(1, mockDto);
  
      expect(service.update).toHaveBeenCalledWith(1, mockDto);
      expect(result).toEqual(mockEntity);
    });
  });
  
  describe('remove', () => {
    it('Registro removido com sucesso!', async () => {
      const mockMessage = 'ID 1 excluído com sucesso';
      service.remove.mockResolvedValue(mockMessage);

      const result = await controller.remove(1);

      expect(service.remove).toHaveBeenCalledWith(1);
      expect(result).toEqual(mockMessage);
    });
  });
});
