import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Sección de Presentación */}
      <section className="text-center py-16 bg-red-600 text-white">
        <h1 className="text-4xl font-bold">Bienvenido a LEGION CNC</h1>
        <p className="text-lg mt-4">Máquinas CNC de alta precisión y calidad</p>
        <a
          href="/catalogo"
          className="mt-6 inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300"
        >
          Ver Catálogo
        </a>
      </section>

      {/* Galería de Imágenes */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestras Máquinas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: "/galeria-imagenes/laser.jpg", text: "LASER" },
            { src: "/galeria-imagenes/plasma.jpg", text: "PLASMA" },
            { src: "/galeria-imagenes/router.jpg", text: "ROUTER" },
          ].map((machine, index) => (
            <div key={index} className="text-center">
              <Image
                src={machine.src}
                alt={machine.text}
                width={400}
                height={300}
                className="rounded-lg shadow-lg mx-auto transition-transform duration-300 hover:scale-105"
              />
              <p className="mt-4 text-lg font-semibold">{machine.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Garantia, Capacitacion, Soporte Técnico */}
      <section className="bg-gray-900 text-white text-center py-12">
        <h2 className="text-2xl font-bold mb-8">Nuestros Servicios</h2>
        <div className="flex justify-center space-x-12 text-6xl">
          <div className="text-center">
            <i className="fas fa-chalkboard-teacher"></i>
            <p className="mt-2 text-xl">Capacitación</p>
          </div>
          <div className="text-center">
            <i className="fas fa-shield-alt"></i>
            <p className="mt-2 text-xl">Garantía</p>
          </div>
          <div className="text-center">
            <i className="fas fa-tools"></i>
            <p className="mt-2 text-xl">Soporte Técnico</p>
          </div>
        </div>
      </section>


      {/* Materiales */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Trabajamos con una gran variedad de materiales
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            { src: "/materiales/madera.jpg", text: "Todo tipo de maderas" },
            { src: "/materiales/piedra.jpg", text: "Piedra y Granito" },
            { src: "/materiales/pvc.jpg", text: "PVC Plásticos y Espumaflex" },
            { src: "/materiales/cobre.jpg", text: "Cobre, Aluminio y metales no ferrosos" },
            { src: "/materiales/acrilico.jpg", text: "Acrílico y Policarbonato" },
            { src: "/materiales/alucobond.jpg", text: "Alucobond" },
          ].map((material, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={material.src}
                alt={material.text}
                width={200}
                height={200}
                className="w-48 h-48 object-cover rounded-lg mx-auto transition-transform duration-300 hover:scale-105"
              />
              <p className="mt-2 font-bold min-h-[50px]">{material.text}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Redes Sociales */}
      <section className="bg-gray-900 text-white text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Síguenos en Redes Sociales</h2>
        <div className="flex justify-center gap-6 text-3xl">
          <a
            href="https://www.facebook.com/share/15wCjERbyD/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/legion_cnc?igsh=M25maHljZnY2cmd6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://x.com/LegionCNCec?t=ue6fuh4n0RmVFtvuCj2yJQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/@LegionCNC"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            /* href="https://www.tiktok.com/@tuUsuario" */
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </section>


      {/* Testimonios */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Clientes</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xl mx-auto">
          <p className="text-lg">"Las máquinas CNC de LEGION CNC han mejorado nuestra producción y calidad"</p>
          <span className="block mt-4 font-bold">- Juan Pérez, Empresa XYZ</span>
        </div>
      </section>

      {/* Contacto */}
      <section className="bg-gray-200 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Nombre" className="w-full p-3 mb-4 border rounded-lg" />
          <input type="email" placeholder="Correo" className="w-full p-3 mb-4 border rounded-lg" />
          <textarea placeholder="Mensaje" className="w-full p-3 mb-4 border rounded-lg"></textarea>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">Enviar</button>
        </form>
      </section>
    </div>
  );
}
