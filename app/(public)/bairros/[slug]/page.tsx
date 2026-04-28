import { notFound } from 'next/navigation';
import { bairros } from '@/data/seed';

type Props = { params: Promise<{ slug: string }> };

export default async function BairroDetailPage({ params }: Props) {
  const { slug } = await params;
  const bairro = bairros.find((item) => item.slug === slug);

  if (!bairro) return notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-azorean">{bairro.nome}</h1>
      <p className="mt-2 text-slate-600">{bairro.descricao}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          'História', 'Descrição', 'Mapa', 'Fotos', 'Pontos turísticos', 'Praias próximas', 'Trilhas',
          'Gastronomia', 'Comércio local', 'Hospedagens', 'Experiências', 'Ofertas', 'Eventos', 'FAQs', 'Anúncios'
        ].map((section) => (
          <article key={section} className="rounded-xl border bg-white p-4">
            <h2 className="font-semibold">{section}</h2>
            <p className="mt-2 text-sm text-slate-600">Conteúdo dinâmico gerenciado no CMS para o bairro {bairro.nome}.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
