import Link from "next/link";

export default function GalicianHome() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-primary-700">
          Aprende Química de Xeito Interactivo
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Plataforma educativa moderna para dominar os conceptos de química
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-3 text-primary-600">
            🎯 Exercicios Interactivos
          </h2>
          <p className="text-gray-600 mb-4">
            Practica con exercicios de opción múltiple e verdadeiro/falso con
            retroalimentación instantánea.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-3 text-primary-600">
            ⭐ Sistema de Gamificación
          </h2>
          <p className="text-gray-600 mb-4">
            Gaña puntos de experiencia (XP) e segue o teu progreso mentres
            aprendes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-3 text-primary-600">
            📱 Deseño Responsivo
          </h2>
          <p className="text-gray-600 mb-4">
            Aprende dende calquera dispositivo coa nosa interface optimizada
            para móbiles.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-3 text-primary-600">
            🌍 Multilingüe
          </h2>
          <p className="text-gray-600 mb-4">
            Dispoñible en Español, Catalán e Galego para mellor accesibilidade.
          </p>
        </div>
      </section>

      <section className="text-center bg-primary-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-primary-800">
          Comeza a Aprender Agora
        </h2>
        <p className="text-gray-700 mb-6">
          Explora os nosos temas e comeza a túa viaxe no mundo da química
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/gl/topics"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Ver Temas
          </Link>
        </div>
      </section>
    </div>
  );
}
