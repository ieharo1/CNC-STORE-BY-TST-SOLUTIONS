export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        ¡Bienvenido a mi proyecto!
      </h1>
      <p className="text-lg text-gray-700">
        Esta es una pantalla de inicio con Tailwind CSS.
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
        Haz clic aquí
      </button>
    </div>
  );
}