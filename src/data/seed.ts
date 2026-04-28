import type { AccommodationType, Bairro, CommercialCategory, CommercialPlan, Distrito, ExperienceType, Region } from '@/types/domain';

export const regions: Region[] = [
  { slug: 'norte', nome: 'Região Norte', descricao: 'Praias, dunas e vocação turística.' },
  { slug: 'leste', nome: 'Região Leste', descricao: 'Lagoa, cultura e esportes de natureza.' },
  { slug: 'centro', nome: 'Região Central', descricao: 'Centro cívico, histórico e comercial.' },
  { slug: 'continental', nome: 'Região Continental', descricao: 'Bairros urbanos e logística estratégica.' },
  { slug: 'sul', nome: 'Região Sul', descricao: 'Tradição açoriana, pesca e praias preservadas.' },
];

export const distritos: Distrito[] = [
  { slug: 'distrito-sede', nome: 'Distrito Sede', regiaoSlug: 'centro' },
  { slug: 'canasvieiras', nome: 'Canasvieiras', regiaoSlug: 'norte' },
  { slug: 'cachoeira-do-bom-jesus', nome: 'Cachoeira do Bom Jesus', regiaoSlug: 'norte' },
  { slug: 'ingleses-do-rio-vermelho', nome: 'Ingleses do Rio Vermelho', regiaoSlug: 'norte' },
  { slug: 'lagoa-da-conceicao', nome: 'Lagoa da Conceição', regiaoSlug: 'leste' },
  { slug: 'ratones', nome: 'Ratones', regiaoSlug: 'norte' },
  { slug: 'santo-antonio-de-lisboa', nome: 'Santo Antônio de Lisboa', regiaoSlug: 'norte' },
  { slug: 'rio-tavares', nome: 'Rio Tavares', regiaoSlug: 'sul' },
  { slug: 'campeche', nome: 'Campeche', regiaoSlug: 'sul' },
  { slug: 'ribeirao-da-ilha', nome: 'Ribeirão da Ilha', regiaoSlug: 'sul' },
  { slug: 'pântano-do-sul', nome: 'Pântano do Sul', regiaoSlug: 'sul' },
];

export const bairros: Bairro[] = [
  'Agronômica','Balneário','Barra da Lagoa','Cachoeira do Bom Jesus','Cacupé','Campeche','Canasvieiras','Capoeiras','Carianos','Canto','Centro','Coqueiros','Corrego Grande','Costeira do Pirajubaé','Estreito','Forte','Itacorubi','Itaguaçu','Jardim Atlântico','João Paulo','José Mendes','Jurerê','Jurerê Internacional','Lagoa da Conceição','Morro das Pedras','Monte Cristo','Parque São Jorge','Pantanal','Pântano do Sul','Praia Brava','Praia da Daniela','Praia do Santinho','Ratones','Ribeirão da Ilha','Rio Tavares','Saco dos Limões','Sambaqui','Santa Mônica','Santo Antônio de Lisboa','São João do Rio Vermelho','Saco Grande','Sol Nascente','Tapera da Base','Trindade','Vargem Grande','Vargem Pequena','Armação','Matadeiro','Lagoinha do Norte','Ponta das Canas','Ingleses do Rio Vermelho','Canajurê','Coloninha','Abraão','Bom Abrigo','Fazenda do Rio Tavares'
].map((nome, index) => ({
  slug: nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-'),
  nome,
  distritoSlug: distritos[index % distritos.length].slug,
  regiaoSlug: distritos[index % distritos.length].regiaoSlug,
  historia: `História de ${nome} com raízes açorianas e desenvolvimento turístico local.`,
  descricao: `${nome} integra a experiência completa da ilha com serviços, cultura e natureza.`,
}));

export const commercialCategories: CommercialCategory[] = [
  'Gastronomia','Hospedagem','Passeios','Bem-estar','Compras','Serviços Locais'
].map((nome) => ({ slug: nome.toLowerCase().replace(/\s+/g, '-'), nome }));

export const accommodationTypes: AccommodationType[] = [
  'Hotel','Pousada','Hostel','Resort','Apartamento','Casa de Temporada'
].map((nome) => ({ slug: nome.toLowerCase().replace(/\s+/g, '-'), nome }));

export const experienceTypes: ExperienceType[] = [
  'Passeio Náutico','Trilha Guiada','Gastronomia Local','Turismo Cultural','Aventura','Bem-estar'
].map((nome) => ({ slug: nome.toLowerCase().replace(/\s+/g, '-'), nome }));

export const commercialPlans: CommercialPlan[] = [
  {
    slug: 'basico',
    nome: 'Plano Básico',
    mensalidade: 149,
    beneficios: ['Perfil comercial', '1 oferta ativa', 'Relatório mensal'],
  },
  {
    slug: 'pro',
    nome: 'Plano Pro',
    mensalidade: 399,
    beneficios: ['Perfil em destaque', 'Ofertas ilimitadas', 'Relatórios semanais', 'Suporte prioritário'],
  },
  {
    slug: 'premium',
    nome: 'Plano Premium',
    mensalidade: 899,
    beneficios: ['Home patrocinada', 'Gestor dedicado', 'Automação de campanhas'],
  },
];
