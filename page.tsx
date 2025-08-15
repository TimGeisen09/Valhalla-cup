export default function Hub() {
  return (
    <main className="min-h-screen grid place-items-center bg-neutral-950 text-neutral-100">
      <div className="w-full max-w-xl mx-auto p-8">
        <div className="bg-neutral-900/70 backdrop-blur rounded-2xl border border-neutral-800 shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Logo />
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Valhalla Cup E‑Soccer</h1>
              <p className="text-sm text-neutral-400">Linemate · Research Hub (MVP)</p>
            </div>
          </div>

          <p className="text-neutral-300 mb-8">
            Willkommen im Hub. Starte direkt ins Tool für Head‑to‑Head & letzte N Spiele.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="/research"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-medium shadow transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ring-offset-neutral-950 bg-blue-600 hover:bg-blue-500"
            >
              <span className="mr-2">Research Tool</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <footer className="mt-6 text-center text-xs text-neutral-500">
          MVP • Keine Quoten, nur Linien & Ergebnisse • drafted.gg Datenquelle
        </footer>
      </div>
    </main>
  );
}

function Logo() {
  return (
    <div className="h-10 w-10 grid place-items-center rounded-xl bg-neutral-800 border border-neutral-700">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 17l8-10 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="10" className="opacity-20" fill="currentColor"/>
      </svg>
    </div>
  );
}
