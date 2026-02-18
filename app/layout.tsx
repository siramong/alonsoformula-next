import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alonsoformula - Aprender Química",
    template: "%s | Alonsoformula"
  },
  description: "Plataforma educativa para aprender química de forma interactiva",
  keywords: ["química", "educación", "aprender", "ciencia", "fórmulas"],
  authors: [{ name: "Alonsoformula" }],
  creator: "Alonsoformula",
  publisher: "Alonsoformula",
  metadataBase: new URL("https://alonsoformula.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://alonsoformula.com",
    siteName: "Alonsoformula",
    title: "Alonsoformula - Aprender Química",
    description: "Plataforma educativa para aprender química de forma interactiva",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alonsoformula - Aprender Química",
    description: "Plataforma educativa para aprender química de forma interactiva",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen font-sans antialiased text-slate-900">
        {children}
      </body>
    </html>
  );
}
