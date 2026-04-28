'use client';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-50 p-8">
        <main className="mx-auto max-w-2xl rounded-2xl border bg-white p-6">
          <h1 className="text-2xl font-bold text-red-700">Ops! Ocorreu um erro inesperado.</h1>
          <p className="mt-2 text-slate-600">{error.message}</p>
          <button onClick={reset} className="mt-4 rounded-lg bg-ocean px-4 py-2 text-white">
            Tentar novamente
          </button>
        </main>
      </body>
    </html>
  );
}
