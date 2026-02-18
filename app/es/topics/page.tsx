import Link from "next/link";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Temas de Química",
  description: "Explora todos los temas de química orgánica disponibles",
};

const topics = [
  {
    slug: "alcanos",
    title: "Alcanos",
    description: "Hidrocarburos saturados con enlaces simples",
    emoji: "🔗",
    category: "Hidrocarburos",
    difficulty: "Básico",
    color: "from-purple-600 to-pink-600",
  },
  {
    slug: "alquenos",
    title: "Alquenos",
    description: "Hidrocarburos insaturados con dobles enlaces",
    emoji: "⚡",
    category: "Hidrocarburos",
    difficulty: "Básico",
    color: "from-pink-600 to-purple-600",
  },
  {
    slug: "alcoholes",
    title: "Alcoholes",
    description: "Compuestos orgánicos con grupos hidroxilo (-OH)",
    emoji: "🧪",
    category: "Grupos Funcionales",
    difficulty: "Intermedio",
    color: "from-cyan-600 to-purple-600",
  },
];

export default function TopicsPage() {
  return (
    <div className="min-h-screen relative">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full particle opacity-30"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-pink-500 rounded-full particle opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-cyan-500 rounded-full particle opacity-30" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/es" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all hover:scale-110">
              ⚗️
            </div>
            <div>
              <span className="font-black text-2xl text-white tracking-tight">Alonsoformula</span>
              <div className="text-xs text-purple-400 font-semibold">Química Orgánica</div>
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/es/topics" className="text-purple-400 hover:text-white font-medium transition-colors">
              Temas
            </Link>
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-400">
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded">ES</span>
              <span className="text-gray-600">|</span>
              <Link href="/ca/topics" className="text-gray-500 hover:text-gray-300 transition-colors">CA</Link>
              <span className="text-gray-600">|</span>
              <Link href="/gl/topics" className="text-gray-500 hover:text-gray-300 transition-colors">GL</Link>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur border border-purple-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm font-bold text-purple-200">📚 Catálogo Completo</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight tracking-tight">
            Explora Todos los <span className="text-gradient">Temas</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubre contenido estructurado y ejercicios interactivos para cada tema de química orgánica
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {topics.map((topic) => (
            <Link 
              key={topic.slug} 
              href={`/es/topics/${topic.slug}`}
              className="group"
            >
              <div className="card-glass p-10 rounded-3xl h-full transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-5xl group-hover:scale-110 transition-transform shadow-2xl`}>
                      {topic.emoji}
                    </div>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {topic.difficulty}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {topic.title}
                  </h2>
                  
                  <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                    {topic.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {topic.category}
                    </span>
                    <div className="flex items-center gap-2 text-purple-400 font-bold group-hover:gap-3 transition-all">
                      <span>Explorar</span>
                      <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center card-glass p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-cyan-600/10"></div>
          <div className="relative">
            <div className="text-7xl mb-6 animate-bounce-gentle">🚀</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Más temas <span className="text-gradient">próximamente</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Estamos trabajando para agregar más contenido de química orgánica.<br />
              <span className="text-purple-400 font-semibold">Próximamente: Alquinos, Aldehídos, Cetonas, Ácidos Carboxílicos, y mucho más.</span>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 backdrop-blur-xl bg-slate-900/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold shadow-lg">
                ⚗️
              </div>
              <div>
                <div className="font-bold text-white">Alonsoformula</div>
                <div className="text-xs text-gray-400">Química Orgánica</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-1">
                © 2026 Alonsoformula. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs">
                Hecho con <span className="text-pink-500">❤️</span> para estudiantes de química
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
