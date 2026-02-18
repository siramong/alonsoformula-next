import Link from "next/link";

export default function SpanishHome() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-primary-700">
          Aprende Química de Forma Interactiva
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Plataforma educativa moderna para dominar los conceptos de química
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-3 text-primary-600">
            🎯 Ejercicios Interactivos
          </h2>
          <p className="text-gray-600 mb-4">
            Practica con ejercicios de opción múltiple y verdadero/falso con
            retroalimentación instantánea.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-3 text-primary-600">
            ⭐ Sistema de Gamificación
          </h2>
          <p className="text-gray-600 mb-4">
            Gana puntos de experiencia (XP) y sigue tu progreso mientras
            aprendes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-3 text-primary-600">
            📱 Diseño Responsivo
          </h2>
          <p className="text-gray-600 mb-4">
            Aprende desde cualquier dispositivo con nuestra interfaz optimizada
            para móviles.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-3 text-primary-600">
            🌍 Multilingüe
          </h2>
          <p className="text-gray-600 mb-4">
            Disponible en Español, Catalán y Gallego para mejor accesibilidad.
          </p>
        </div>
      </section>

      <section className="text-center bg-primary-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-primary-800">
          Comienza a Aprender Ahora
        </h2>
        <p className="text-gray-700 mb-6">
          Explora nuestros temas y comienza tu viaje en el mundo de la química
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/es/topics"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Ver Temas
          </Link>
        </div>
      </section>
    </div>
  );
}
