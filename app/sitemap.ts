import type { MetadataRoute } from 'next';

const routes = [
  '', 'explore', 'regioes', 'distritos', 'bairros', 'praias', 'trilhas', 'pontos-turisticos', 'historia-cultura',
  'centro-historico', 'onde-comer', 'o-que-fazer', 'hospedagens', 'experiencias', 'comercio-local', 'eventos',
  'anuncie-conosco', 'cadastre-sua-empresa', 'cadastre-sua-hospedagem', 'sobre', 'contato', 'termos-de-uso', 'politica-de-privacidade'
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://vivafloripa.com.br/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
