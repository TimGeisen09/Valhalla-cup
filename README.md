# Valhalla Hub (MVP)

Minimaler Next.js + Tailwind Hub mit Landing-Page (`/`) und Research-Platzhalter (`/research`).

## Lokal starten
```bash
npm install
npm run dev
# öffne http://localhost:3000
```

## Deploy zu Vercel (empfohlen)
1. Repo zu GitHub hochladen (oder Vercel CLI nutzen)
2. **Vercel CLI**:
```bash
npm i -g vercel
vercel login
vercel
```
Danach erhältst du sofort eine URL wie `https://valhalla-hub.vercel.app`.

## Struktur
- `app/page.tsx` → Hub (Button zu /research)
- `app/research/page.tsx` → Platzhalter Research-Seite
- Tailwind konfiguriert via `tailwind.config.ts` und `styles/globals.css`
