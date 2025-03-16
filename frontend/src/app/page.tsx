import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen rounded-lg pt-4 pb-12">
      {/* Sección de Presentación */}
      <section className="text-center py-16 relative text-white  rounded-lg shadow-lg mx-auto  max-w-7xl mt-6"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 0, 0, 0.6), rgba(255, 0, 0, 0.6)), url('/images/pantalla-principal/fondocnc.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/pantalla-principal/logo-negro.png"
            alt="Logo de LEGION CNC"
            width={150}
            height={150}
            className="rounded-full shadow-2xl"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-48">LEGION CNC</h1>
        <p className="text-base sm:text-sm md:text-lg mt-4">Máquinas CNC de alta precisión y calidad</p>
        <a
          href="/pages/catalogo"
          className="mt-6 inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300"
        >
          Ver Catálogo
        </a>
      </section>
      {/* Galería de Imágenes */}
      <section className="text-center py-16 bg-gray-200 relative text-black  rounded-lg shadow-lg mx-auto  max-w-7xl mt-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">Nuestras Máquinas</h2>
        <div className="flex flex-wrap justify-center gap-6 mx-6">
          {[
            { src: "/images/galeria-imagenes/laser.jpg", text: "LASER" },
            { src: "/images/galeria-imagenes/plasma.jpg", text: "PLASMA" },
            { src: "/images/galeria-imagenes/router.jpg", text: "ROUTER" },
            { src: "/images/galeria-imagenes/router.jpg", text: "ROUTER" },
            { src: "/images/galeria-imagenes/router.jpg", text: "ROUTER" },
            { src: "/images/galeria-imagenes/router.jpg", text: "ROUTER" },
            { src: "/images/galeria-imagenes/router.jpg", text: "ROUTER" },
          ].map((machine, index) => (
            <div key={index} className="text-center">
              <Image
                src={machine.src}
                alt={machine.text}
                width={300}
                height={200}
                className="rounded-lg shadow-lg mx-auto w-full h-auto transition-transform duration-300 hover:scale-105"
              />
              <p className="mt-4 text-sm sm:text-base md:text-lg font-semibold">{machine.text}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Garantía, Capacitación, Soporte Técnico */}
      <section className="text-center py-16 bg-gray-900 relative text-white  rounded-lg shadow-lg mx-auto  max-w-7xl mt-6">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/pantalla-principal/fondocnc.png')" }}></div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Nuestros Servicios</h2>
        <div className="flex flex-wrap justify-center gap-12 text-3xl sm:text-4xl">
          {[
            { icon: "fas fa-chalkboard-teacher", text: "Capacitación" },
            { icon: "fas fa-shield-alt", text: "Garantía" },
            { icon: "fas fa-tools", text: "Soporte Técnico" },
            { icon: "fas fa-cogs", text: "Mantenimiento" }, // Icono extra
          ].map((service, index) => (
            <div key={index} className="text-center">
              <i className={`${service.icon} mb-4`}></i>
              <p className="mt-2 text-sm sm:text-base md:text-lg">{service.text}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Materiales */}
      <section className="text-center py-16 bg-gray-200 relative text-black  rounded-lg shadow-lg mx-auto  max-w-7xl mt-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          Trabajamos con una gran variedad de materiales
        </h2>
        {/* Contenedor flexible con centrado automático */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { src: "/images/materiales/madera.jpg", text: "Todo tipo de maderas" },
            { src: "/images/materiales/piedra.jpg", text: "Piedra y Granito" },
            { src: "/images/materiales/pvc.jpg", text: "PVC Plásticos y Espumaflex" },
            { src: "/images/materiales/cobre.jpg", text: "Cobre, Aluminio y metales no ferrosos" },
            { src: "/images/materiales/acrilico.jpg", text: "Acrílico y Policarbonato" },
            { src: "/images/materiales/alucobond.jpg", text: "Alucobond" },
          ].map((material, index) => (
            <div key={index} className="h-40 w-60 bg-transparent rounded-lg flex flex-col items-center mb-6">
              <img
                src={material.src}
                alt={material.text}
                className="w-full h-28 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
              />
              <p className="font-semibold text-sm sm:text-base mt-2 text-center">{material.text}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Redes Sociales */}
      <section className="text-center py-16 bg-gray-900 relative text-white  rounded-lg shadow-lg mx-auto  max-w-7xl mt-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Síguenos en Redes Sociales</h2>
        <div className="flex justify-center gap-6 text-3xl sm:text-4xl">
          {[
            { href: "https://www.facebook.com/share/15wCjERbyD/", icon: "fab fa-facebook", color: "hover:text-blue-600" },
            { href: "https://www.instagram.com/legion_cnc?igsh=M25maHljZnY2cmd6", icon: "fab fa-instagram", color: "hover:text-pink-600" },
            { href: "https://x.com/LegionCNCec?t=ue6fuh4n0RmVFtvuCj2yJQ&s=09", icon: "fab fa-twitter", color: "hover:text-blue-400" },
            { href: "https://www.youtube.com/@LegionCNC", icon: "fab fa-youtube", color: "hover:text-red-600" },
            { href: "https://www.tiktok.com/@LegionCNC", icon: "fab fa-tiktok", color: "hover:text-black" }, // Añadido icono de TikTok
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} transition`}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </section>
      {/* Testimonios */}
      <section className="text-center py-16 bg-gray-200 relative text-black  rounded-lg shadow-lg mx-auto  max-w-7xl mt-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">Nuestros Clientes</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="flex items-center max-w-md mx-auto bg-red-600 text-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/pantalla-principal/testimonios/cliente.jpg"
                alt={`Testimonio ${index + 1}`}
                width={100}
                height={100}
                className="w-24 h-24 rounded-full object-cover mr-6"
              />
              <div>
                <p className="text-sm sm:text-base md:text-lg">"Excelente calidad y servicio de LEGION CNC."</p>
                <span className="block mt-4 font-semibold">- Cliente {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Experiencia y Cobertura */}
      <section className="flex flex-col md:flex-row items-center justify-center py-16 bg-gray-900 relative text-white rounded-lg shadow-lg mx-auto max-w-7xl mt-6">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/pantalla-principal/fondocnc.png')" }}></div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/images/pantalla-principal/ecuador.png" alt="Mapa de Ecuador" className="w-1/3 sm:w-1/1 md:w-1/2 lg:w-1/3" />
        </div>
        <div className="md:w-1/2 text-center px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Presencia sólida en Ecuador y expansión internacional
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            Transformamos negocios con tecnología de vanguardia
          </h3>

          <p className="text-lg max-w-3xl mx-auto">
            Nos encontramos en múltiples puntos estratégicos del país, llevando innovación, eficiencia y soluciones
            tecnológicas de alto impacto a cada rincón. Nuestra maquinaria garantiza calidad y rentabilidad,
            potenciando el crecimiento de tu negocio.
          </p>
        </div>
      </section>
      {/* Contacto */}
      <section className="text-center py-16 bg-gray-200 relative text-black rounded-lg shadow-lg mx-auto max-w-7xl mt-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Contáctanos</h2>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Nombre" className="w-full p-3 mb-4 border rounded-lg" />
          <input type="email" placeholder="Correo Electrónico" className="w-full p-3 mb-4 border rounded-lg" />
          <textarea placeholder="Mensaje" className="w-full p-3 mb-4 border rounded-lg" rows="4"></textarea>
          <button type="submit" className="w-full p-3 bg-red-600 text-white rounded-lg font-bold">
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}
