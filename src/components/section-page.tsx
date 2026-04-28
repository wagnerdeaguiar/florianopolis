import type { ReactNode } from 'react';

export function SectionPage({ title, subtitle, children }: { title: string; subtitle: string; children?: ReactNode }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-azorean">{title}</h1>
      <p className="mt-3 text-slate-600">{subtitle}</p>
      {children && <section className="mt-8">{children}</section>}
    </main>
  );
}
