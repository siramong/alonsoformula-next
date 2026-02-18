import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inici",
  description: "Benvingut a Alonsoformula - Aprèn química de forma interactiva",
  openGraph: {
    locale: "ca_ES",
  },
};

export default function CatalanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-primary-600 text-white shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/ca" className="text-2xl font-bold">
              Alonsoformula
            </Link>
            <div className="flex gap-4 items-center">
              <Link href="/ca" className="hover:underline">
                Inici
              </Link>
              <div className="flex gap-2 text-sm">
                <Link href="/es" className="hover:underline">
                  ES
                </Link>
                <span>|</span>
                <Link href="/ca" className="font-bold">
                  CA
                </Link>
                <span>|</span>
                <Link href="/gl" className="hover:underline">
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
          <p>&copy; {new Date().getFullYear()} Alonsoformula. Tots els drets reservats.</p>
        </div>
      </footer>
    </>
  );
}
