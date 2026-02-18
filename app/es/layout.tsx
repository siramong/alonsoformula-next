import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Bienvenido a Alonsoformula - Aprende química de forma interactiva",
  openGraph: {
    locale: "es_ES",
  },
};

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <Container className="py-4">
          <nav className="flex items-center justify-between gap-6">
            <Link href="/es" className="text-xl font-semibold text-slate-900">
              Alonsoformula
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link
                href="/es"
                className="font-semibold text-slate-700 transition hover:text-slate-900"
              >
                Inicio
              </Link>
              <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-semibold">
                <Link
                  href="/es"
                  className="rounded-full bg-white px-3 py-1 text-slate-900 shadow-sm"
                >
                  ES
                </Link>
                <Link
                  href="/ca"
                  className="px-3 py-1 text-slate-600 transition hover:text-slate-900"
                >
                  CA
                </Link>
                <Link
                  href="/gl"
                  className="px-3 py-1 text-slate-600 transition hover:text-slate-900"
                >
                  GL
                </Link>
              </div>
            </div>
          </nav>
        </Container>
      </header>
      <main className="py-10">
        <Container>{children}</Container>
      </main>
      <footer className="border-t border-slate-200/80 bg-white/70">
        <Container className="py-8 text-center text-sm text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} Alonsoformula. Todos los derechos
            reservados.
          </p>
        </Container>
      </footer>
    </>
  );
}
