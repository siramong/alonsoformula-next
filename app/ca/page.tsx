import Link from "next/link";

export default function CatalanHome() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-primary-700">
          Aprèn Química de Forma Interactiva
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Plataforma educativa moderna per dominar els conceptes de química
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-3 text-primary-600">
            🎯 Exercicis Interactius
          </h2>
          <p className="text-gray-600 mb-4">
            Practica amb exercicis d'opció múltiple i vertader/fals amb
            retroalimentació instantània.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-3 text-primary-600">
            ⭐ Sistema de Gamificació
          </h2>
          <p className="text-gray-600 mb-4">
            Guanya punts d'experiència (XP) i segueix el teu progrés mentre
            aprens.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-3 text-primary-600">
            📱 Disseny Responsiu
          </h2>
          <p className="text-gray-600 mb-4">
            Aprèn des de qualsevol dispositiu amb la nostra interfície
            optimitzada per a mòbils.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-3 text-primary-600">
            🌍 Multilingüe
          </h2>
          <p className="text-gray-600 mb-4">
            Disponible en Espanyol, Català i Gallec per a una millor
            accessibilitat.
          </p>
        </div>
      </section>

      <section className="text-center bg-primary-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-primary-800">
          Comença a Aprendre Ara
        </h2>
        <p className="text-gray-700 mb-6">
          Explora els nostres temes i comença el teu viatge al món de la química
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/ca/topics"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Veure Temes
          </Link>
        </div>
      </section>
    </div>
  );
}
