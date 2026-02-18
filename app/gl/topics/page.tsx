import Link from "next/link";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Temas de Química",
  description: "Explora todos os temas de química orgánica dispoñibles",
};

const topics = [
  {
    slug: "alcanos",
    title: "Alcanos",
    description: "Hidrocarburos saturados con enlaces simples",
    emoji: "🔗",
    category: "Hidrocarburos",
    difficulty: "Básico",
  },
  {
    slug: "alquenos",
    title: "Alquenos",
    description: "Hidrocarburos insaturados con dobles enlaces",
    emoji: "⚡",
    category: "Hidrocarburos",
    difficulty: "Básico",
  },
  {
    slug: "alcoholes",
    title: "Alcoholes",
    description: "Compostos orgánicos con grupos hidroxilo (-OH)",
    emoji: "🧪",
    category: "Grupos Funcionais",
    difficulty: "Intermedio",
  },
];

export default function TopicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-primary-50">
      <Header lang="gl" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary-100/60 backdrop-blur border border-primary-200">
            <span className="text-sm font-bold text-primary-700">📚 Catálogo Completo</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900">
            Explora Todos os <span className="text-gradient">Temas</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Descubre contido estruturado e exercicios interactivos para cada tema
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link 
              key={topic.slug} 
              href={`/gl/topics/${topic.slug}`}
              className="group"
            >
              <div className="card-glass p-8 rounded-3xl h-full transition-all duration-300 hover:shadow-2xl hover:scale-105 focus-within:ring-2 focus-within:ring-primary-400 focus-within:ring-offset-2">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform">
                    {topic.emoji}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary-100 text-primary-700">
                    {topic.difficulty}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {topic.title}
                </h2>
                
                <p className="text-sm text-gray-600 mb-4">
                  {topic.description}
                </p>
                
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                  <span className="text-xs font-semibold text-gray-500 uppercase">
                    {topic.category}
                  </span>
                  <div className="flex items-center gap-2 text-primary-600 font-bold group-hover:gap-3 transition-all">
                    <span className="text-sm">Explorar</span>
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center card-glass p-12 rounded-3xl">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Mais temas proximamente
          </h2>
          <p className="text-gray-700 max-w-lg mx-auto">
            Estamos traballando para engadir máis contido de química orgánica.
          </p>
        </div>
      </main>

      <footer className="border-t border-white/20 backdrop-blur-md bg-white/30 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2026 Alonsoformula. Todos os dereitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
