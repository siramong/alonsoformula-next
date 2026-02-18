import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Benvido a Alonsoformula - Aprende química de xeito interactivo",
  openGraph: {
    locale: "gl_ES",
  },
};

export default function GalicianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-primary-600 text-white shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/gl" className="text-2xl font-bold">
              Alonsoformula
            </Link>
            <div className="flex gap-4 items-center">
              <Link href="/gl" className="hover:underline">
                Inicio
              </Link>
              <div className="flex gap-2 text-sm">
                <Link href="/es" className="hover:underline">
                  ES
                </Link>
                <span>|</span>
                <Link href="/ca" className="hover:underline">
                  CA
                </Link>
                <span>|</span>
                <Link href="/gl" className="font-bold">
                  GL
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-100 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Alonsoformula. Todos os dereitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
