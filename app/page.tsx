import Link from 'next/link';
import { bairros, distritos, regions } from '@/data/seed';

const highlights = [
  { label: 'Regiões mapeadas', value: regions.length, href: '/regioes' },
  { label: 'Distritos cadastrados', value: distritos.length, href: '/distritos' },
  { label: 'Bairros prontos', value: bairros.length, href: '/bairros' },
  { label: 'Módulos CMS modelados', value: 28, href: '/painel' },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="rounded-3xl bg-gradient-to-r from-ocean to-lagoon p-8 text-white">
        <h1 className="text-4xl font-extrabold">Viva Floripa</h1>
        <p className="mt-2 text-lg">O portal mais completo sobre Florianópolis</p>
        <p className="mt-4 max-w-2xl text-sm md:text-base">
          Portal editorial + guia comercial + marketplace de experiências, hospedagens, vouchers e combos.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/explore" className="rounded-xl bg-white px-4 py-2 font-medium text-ocean">Explorar agora</Link>
          <Link href="/painel" className="rounded-xl border border-white px-4 py-2">Ver painéis</Link>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <Link key={item.label} href={item.href} className="rounded-2xl border bg-white p-5 shadow-sm hover:border-ocean">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-3xl font-bold text-azorean">{item.value}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
