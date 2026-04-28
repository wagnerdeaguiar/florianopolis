export type Region = {
  slug: string;
  nome: string;
  descricao: string;
};

export type Distrito = {
  slug: string;
  nome: string;
  regiaoSlug: string;
};

export type Bairro = {
  slug: string;
  nome: string;
  distritoSlug: string;
  regiaoSlug: string;
  historia: string;
  descricao: string;
};

export type CommercialCategory = {
  slug: string;
  nome: string;
};

export type AccommodationType = {
  slug: string;
  nome: string;
};

export type ExperienceType = {
  slug: string;
  nome: string;
};

export type CommercialPlan = {
  slug: string;
  nome: string;
  mensalidade: number;
  beneficios: string[];
};
