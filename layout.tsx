import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valhalla Cup E‑Soccer • Research Hub",
  description: "MVP Hub: Research Tool for Head‑to‑Head & Last N (no odds).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
