import Link from 'next/link';
import { SectionPage } from '@/components/section-page';
import { bairros } from '@/data/seed';

export default function BairrosPage() {
  return (
    <SectionPage title="Bairros" subtitle="56 bairros com páginas próprias e conteúdo editorial estruturado.">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {bairros.map((bairro) => (
          <Link key={bairro.slug} href={`/bairros/${bairro.slug}`} className="rounded-xl border bg-white p-4 hover:border-ocean">
            <h2 className="font-semibold text-slate-800">{bairro.nome}</h2>
            <p className="mt-1 text-sm text-slate-500">{bairro.descricao}</p>
          </Link>
        ))}
      </div>
    </SectionPage>
  );
}
