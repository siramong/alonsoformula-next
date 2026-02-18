import Link from "next/link";

export default function SpanishHome() {
  return (
    <div className="min-h-screen relative">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full particle opacity-30"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-pink-500 rounded-full particle opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-cyan-500 rounded-full particle opacity-30" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-60 right-1/3 w-3 h-3 bg-purple-400 rounded-full particle opacity-30" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all hover:scale-110">
              ⚗️
            </div>
            <div>
              <span className="font-black text-2xl text-white tracking-tight">Alonsoformula</span>
              <div className="text-xs text-purple-400 font-semibold">Química Orgánica</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/es/topics" className="text-gray-300 hover:text-white font-medium transition-colors">
              Temas
            </Link>
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-400">
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded">ES</span>
              <span className="text-gray-600">|</span>
              <Link href="/ca" className="text-gray-500 hover:text-gray-300 transition-colors">CA</Link>
              <span className="text-gray-600">|</span>
              <Link href="/gl" className="text-gray-500 hover:text-gray-300 transition-colors">GL</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-32 overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur border border-purple-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm font-bold text-purple-200">✨ Aprende Química de Forma Divertida</span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 text-white leading-[1.1] tracking-tight">
            Domina la<br />
            <span className="text-gradient inline-block mt-2">Química Orgánica</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 font-medium max-w-3xl mx-auto leading-relaxed">
            Plataforma interactiva con gamificación, ejercicios y feedback instantáneo.<br />
            <span className="text-purple-400">Aprende a tu ritmo, domina la química.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Link
              href="/es/topics"
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transform hover:scale-105 active:scale-95 transition-all text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Comenzar Ahora 
                <span className="group-hover:translate-x-1 transition-transform">🚀</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <button className="px-10 py-5 bg-slate-800/50 backdrop-blur text-white font-bold rounded-2xl border-2 border-purple-500/30 hover:border-purple-500/60 hover:bg-slate-800/70 transform hover:scale-105 active:scale-95 transition-all text-lg">
              Ver Demo 
              <span className="ml-2">▶️</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-glass p-8 rounded-3xl group hover:scale-105 transition-all">
              <div className="text-5xl font-black text-gradient mb-2">+500</div>
              <p className="text-gray-300 font-semibold">Ejercicios Interactivos</p>
            </div>
            <div className="card-glass p-8 rounded-3xl group hover:scale-105 transition-all">
              <div className="text-5xl font-black text-gradient mb-2">15+</div>
              <p className="text-gray-300 font-semibold">Temas Completos</p>
            </div>
            <div className="card-glass p-8 rounded-3xl group hover:scale-105 transition-all">
              <div className="text-5xl font-black text-gradient mb-2">3</div>
              <p className="text-gray-300 font-semibold">Idiomas Disponibles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-4">
            ¿Por qué <span className="text-gradient">Alonsoformula</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            La plataforma más completa para aprender química orgánica de forma efectiva
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="card-glass p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/50">
              🎯
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Ejercicios Interactivos</h3>
            <p className="text-gray-400 leading-relaxed">
              Practica con ejercicios de opción múltiple y retroalimentación en tiempo real.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card-glass p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-pink-500/50">
              ⭐
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Sistema de Gamificación</h3>
            <p className="text-gray-400 leading-relaxed">
              Gana XP, desbloquea logros y compite mientras aprendes conceptos clave.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card-glass p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-purple-600 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/50">
              📱
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">100% Responsive</h3>
            <p className="text-gray-400 leading-relaxed">
              Estudia desde cualquier dispositivo: móvil, tablet o computadora.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="card-glass p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/50">
              🌍
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Multilingüe</h3>
            <p className="text-gray-400 leading-relaxed">
              Disponible en Español, Catalán y Gallego para mayor accesibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Temas <span className="text-gradient">Destacados</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explora nuestro catálogo completo de temas de química orgánica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Alcanos", emoji: "🔗", desc: "Hidrocarburos saturados", color: "from-purple-600 to-pink-600" },
            { title: "Alquenos", emoji: "⚡", desc: "Dobles enlaces C=C", color: "from-pink-600 to-purple-600" },
            { title: "Alcoholes", emoji: "🧪", desc: "Grupos hidroxilo (-OH)", color: "from-cyan-600 to-purple-600" },
          ].map((topic) => (
            <Link key={topic.title} href="/es/topics" className="group">
              <div className="card-glass p-10 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform shadow-2xl`}>
                    {topic.emoji}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{topic.title}</h3>
                  <p className="text-gray-400 mb-6 text-lg">{topic.desc}</p>
                  <div className="flex items-center text-purple-400 font-bold group-hover:gap-3 transition-all">
                    <span>Explorar</span>
                    <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/es/topics"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur text-white font-bold rounded-2xl border-2 border-purple-500/30 hover:border-purple-500/60 hover:bg-slate-800/70 transform hover:scale-105 transition-all"
          >
            Ver todos los temas
            <span>📚</span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="card-glass p-12 sm:p-16 rounded-3xl text-center relative overflow-hidden glow-effect">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-cyan-600/20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              ¿Listo para dominar la <span className="text-gradient">química</span>?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Únete a miles de estudiantes que ya están aprendiendo de forma efectiva
            </p>
            <Link
              href="/es/topics"
              className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transform hover:scale-105 active:scale-95 transition-all text-xl"
            >
              <span>Comenzar Ahora</span>
              <span className="text-2xl">🚀</span>
            </Link>
          </div>
        </div>
      </section>

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
