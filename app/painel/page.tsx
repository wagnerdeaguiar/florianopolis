import Link from 'next/link';

const panels = [
  ['Painel administrativo', '/painel/administrativo'],
  ['Painel editorial', '/painel/editorial'],
  ['Painel do parceiro comercial', '/painel/parceiro'],
  ['Painel do anfitrião', '/painel/anfitriao'],
  ['Painel do turista/visitante', '/painel/turista'],
];

export default function PainelPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Painéis Viva Floripa</h1>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {panels.map(([name, href]) => (
          <Link key={href} href={href} className="rounded-xl border bg-white p-4 hover:border-ocean">{name}</Link>
        ))}
      </div>
    </main>
  );
}
