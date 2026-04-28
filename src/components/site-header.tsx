import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['Explore', '/explore'],
  ['Regiões', '/regioes'],
  ['Distritos', '/distritos'],
  ['Bairros', '/bairros'],
  ['Experiências', '/experiencias'],
  ['Hospedagens', '/hospedagens'],
  ['Eventos', '/eventos'],
];

export function SiteHeader() {
  return (
    <header className="border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div>
          <p className="text-lg font-semibold text-ocean">Viva Floripa</p>
          <p className="text-xs text-slate-500">O portal mais completo sobre Florianópolis</p>
        </div>
        <nav className="hidden gap-4 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm text-slate-700 hover:text-ocean">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
