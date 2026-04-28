import { SectionPage } from '@/components/section-page';
import { regions } from '@/data/seed';

export default function RegioesPage() {
  return (
    <SectionPage title="Regiões" subtitle="Organização oficial de Florianópolis em 5 macrorregiões.">
      <div className="grid gap-4 md:grid-cols-2">
        {regions.map((regiao) => (
          <article key={regiao.slug} className="rounded-xl border bg-white p-4">
            <h2 className="text-lg font-semibold text-azorean">{regiao.nome}</h2>
            <p className="mt-2 text-sm text-slate-600">{regiao.descricao}</p>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}
