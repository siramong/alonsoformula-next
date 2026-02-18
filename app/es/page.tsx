import Link from "next/link";

export default function SpanishHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-primary-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/40 border-b border-white/20">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-lg">
              ⚗️
            </div>
            <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              ChemLab
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-gray-700">ES | CA | GL</span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary-100/60 backdrop-blur border border-primary-200">
            <span className="text-sm font-bold text-primary-700">✨ Aprende Química de Forma Divertida</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black mb-6 text-gray-900 leading-tight">
            Domina la <span className="text-gradient">Química Orgánica</span> Jugando
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 mb-10 font-medium max-w-2xl mx-auto">
            Ejercicios interactivos, gamificación y feedback instantáneo. Aprende al tu ritmo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/es/topics"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all text-lg"
            >
              Comenzar Ahora 🚀
            </Link>
            <button className="px-8 py-4 bg-white text-primary-600 font-bold rounded-full shadow-lg border-2 border-primary-200 hover:border-primary-400 transform hover:scale-105 active:scale-95 transition-all text-lg">
              Saber Más
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-12">
            <div className="card-glass p-4 sm:p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient">+500</div>
              <p className="text-sm text-gray-700 font-medium">Ejercicios</p>
            </div>
            <div className="card-glass p-4 sm:p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient">15+</div>
              <p className="text-sm text-gray-700 font-medium">Temas</p>
            </div>
            <div className="card-glass p-4 sm:p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient">3</div>
              <p className="text-sm text-gray-700 font-medium">Idiomas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-black text-center mb-16 text-gray-900">
          ¿Por qué <span className="text-gradient">ChemLab</span>?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ejercicios Interactivos</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Practica con ejercicios de opción múltiple con retroalimentación instantánea.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sistema de Puntos</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Gana XP mientras aprendes y sigue tu progreso de forma visual.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Responsive Design</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Aprende desde tu móvil, tablet o computadora sin interrupciones.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Multilingüe</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Disponible en Español, Catalán y Gallego.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Contenido Experto</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Elaborado por profesionales de la química.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Diseño Moderno</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Interfaz limpia y atractiva para mejor experiencia.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Rápido y Suave</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Sin lag, sin distracciones, solo aprendizaje puro.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Análisis de Progreso</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Visualiza tu avance y áreas que necesitas reforzar.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-black text-center mb-16 text-gray-900">
          Temas Disponibles
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Alcanos", emoji: "🔗", desc: "Hidrocarburos saturados" },
            { title: "Reacciones", emoji: "⚡", desc: "Mecanismos fundamentales" },
            { title: "Estereoquímica", emoji: "🔄", desc: "Isómeros y conformaciones" },
          ].map((topic) => (
            <Link key={topic.title} href="/es/topics">
              <div className="card-glass p-8 rounded-3xl cursor-pointer group hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{topic.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-gray-700 mb-4">{topic.desc}</p>
                <div className="flex items-center text-primary-600 font-bold group-hover:gap-2 transition-all">
                  Explorar <span className="text-xl">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="card-glass p-12 rounded-3xl">
          <h2 className="text-4xl font-black mb-6 text-gray-900">
            ¿Listo para <span className="text-gradient">aprender</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-8 font-medium">
            Inicia tu viaje hacia el dominio de la química orgánica ahora mismo.
          </p>
          <Link
            href="/es/topics"
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all text-lg"
          >
            Comenzar Ahora 🎓
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 backdrop-blur-md bg-white/30 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-gray-700 font-medium mb-2">
            ChemLab © 2024 | Diseñado para aprender química de forma divertida
          </p>
          <p className="text-gray-600 text-sm">Hecho con ❤️ para estudiantes de química</p>
        </div>
      </footer>
    </div>
  );
}
