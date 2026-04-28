import type { CollectionConfig } from 'payload';

const baseTextField = { name: 'nome', type: 'text', required: true } as const;

const makeCollection = (slug: string, label: string): CollectionConfig => ({
  slug,
  labels: { singular: label, plural: `${label}s` },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [baseTextField],
});

export const collections: CollectionConfig[] = [
  makeCollection('regioes', 'Região'),
  makeCollection('distritos', 'Distrito'),
  makeCollection('bairros', 'Bairro'),
  makeCollection('praias', 'Praia'),
  makeCollection('trilhas', 'Trilha'),
  makeCollection('pontos-turisticos', 'Ponto Turístico'),
  makeCollection('artigos', 'Artigo'),
  makeCollection('roteiros', 'Roteiro'),
  makeCollection('eventos', 'Evento'),
  makeCollection('empresas-parceiras', 'Empresa Parceira'),
  makeCollection('categorias-comerciais', 'Categoria Comercial'),
  makeCollection('planos-pagos', 'Plano Pago'),
  makeCollection('banners-anuncios', 'Banner/Anúncio'),
  makeCollection('ofertas', 'Oferta'),
  makeCollection('produtos', 'Produto'),
  makeCollection('vouchers', 'Voucher com QR Code'),
  makeCollection('validacoes-voucher', 'Validação de Voucher'),
  makeCollection('combos', 'Combo'),
  makeCollection('transacoes-checkout', 'Checkout Pix/Cartão'),
  makeCollection('comissoes', 'Comissão'),
  makeCollection('repasses', 'Repasse'),
  makeCollection('anfitrioes', 'Anfitrião'),
  makeCollection('propriedades', 'Propriedade'),
  makeCollection('calendarios-disponibilidade', 'Calendário de Disponibilidade'),
  makeCollection('reservas', 'Reserva'),
  makeCollection('avaliacoes', 'Avaliação'),
  makeCollection('favoritos', 'Favorito'),
  makeCollection('relatorios-comerciais', 'Relatório Comercial'),
];
