import {
  accommodationTypes,
  bairros,
  commercialCategories,
  commercialPlans,
  distritos,
  experienceTypes,
  regions,
} from '../src/data/seed';

function logCollection(name: string, total: number) {
  console.log(`${name}: ${total} registros preparados.`);
}

async function main() {
  logCollection('Regiões', regions.length);
  logCollection('Distritos', distritos.length);
  logCollection('Bairros', bairros.length);
  logCollection('Categorias comerciais', commercialCategories.length);
  logCollection('Tipos de hospedagem', accommodationTypes.length);
  logCollection('Tipos de experiência', experienceTypes.length);
  logCollection('Planos comerciais', commercialPlans.length);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
