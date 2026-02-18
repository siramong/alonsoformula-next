import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-primary-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Illustration */}
        <div className="mb-8 animate-bounce-gentle">
          <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="card-glass p-10 rounded-3xl space-y-6 animate-slide-up">
          <div className="text-6xl mb-4">🧪</div>
          
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900">
            ¡Página no encontrada!
          </h1>
          
          <p className="text-lg text-gray-700">
            Parece que esta página se ha evaporado como una sustancia volátil.
            No te preocupes, podemos ayudarte a encontrar el camino de vuelta.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/es"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
            >
              🏠 Ir al Inicio
            </Link>
            
            <Link
              href="/es/topics"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-200 bg-white text-primary-600 font-bold rounded-full shadow-md hover:shadow-lg hover:border-primary-300 transform hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
            >
              📚 Ver Temas
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Si crees que esto es un error, por favor{" "}
              <a 
                href="https://github.com/siramong/alonsoformula-next/issues" 
                className="text-primary-600 hover:text-primary-700 font-semibold underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                reporta el problema
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
