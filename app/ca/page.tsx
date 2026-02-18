import Link from "next/link";

export default function CatalanHome() {
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
            <span className="text-sm font-bold text-primary-700">✨ Aprèn Química de Forma Divertida</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black mb-6 text-gray-900 leading-tight">
            Domina la <span className="text-gradient">Química Orgànica</span> Jugant
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 mb-10 font-medium max-w-2xl mx-auto">
            Exercicis interactius, gamificació i retroalimentació instantània. Aprèn al teu ritme.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/ca/topics"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all text-lg"
            >
              Comença Ara 🚀
            </Link>
            <button className="px-8 py-4 bg-white text-primary-600 font-bold rounded-full shadow-lg border-2 border-primary-200 hover:border-primary-400 transform hover:scale-105 active:scale-95 transition-all text-lg">
              Saber Més
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-12">
            <div className="card-glass p-4 sm:p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient">+500</div>
              <p className="text-sm text-gray-700 font-medium">Exercicis</p>
            </div>
            <div className="card-glass p-4 sm:p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient">15+</div>
              <p className="text-sm text-gray-700 font-medium">Temes</p>
            </div>
            <div className="card-glass p-4 sm:p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient">3</div>
              <p className="text-sm text-gray-700 font-medium">Idiomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-black text-center mb-16 text-gray-900">
          Per què <span className="text-gradient">ChemLab</span>?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Exercicis Interactius</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Practica amb exercicis d'opció múltiple amb retroalimentació instantània.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sistema de Punts</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Guanya XP mentre aprens i segueix el teu progrés visualment.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Disseny Responsiu</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Aprèn des del teu mòbil, tablet o ordinador sense interrupcions.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Multilingüe</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Disponible en Espanyol, Català i Gallec.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Contingut Expert</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Elaborat per professionals de la química.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Disseny Modern</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Interfície neta i atractiva per a millor experiència.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ràpid i Suau</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Sense lag, sense distraccions, només aprenentatge pur.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="card-glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Anàlisi de Progrés</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Visualitza el teu avanç i àrees per reforzar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="card-glass p-12 rounded-3xl">
          <h2 className="text-4xl font-black mb-6 text-gray-900">
            Preparatx per <span className="text-gradient">aprendre</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-8 font-medium">
            Inicia el teu viatge cap al domini de la química orgànica ara mateix.
          </p>
          <Link
            href="/ca/topics"
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all text-lg"
          >
            Comença Ara 🎓
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 backdrop-blur-md bg-white/30 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-gray-700 font-medium mb-2">
            ChemLab © 2024 | Dissenyat per aprendre química de forma divertida
          </p>
          <p className="text-gray-600 text-sm">Fet amb ❤️ per a estudiants de química</p>
        </div>
      </footer>
    </div>
  );
}
