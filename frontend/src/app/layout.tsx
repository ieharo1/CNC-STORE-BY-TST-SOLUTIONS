'use client'; // Asegúrate de marcar este archivo como un Client Component

import './globals.css';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Link from 'next/link'; // Importa Link desde Next.js
import CarritoIcono from '../components/CarritoIcono'; // Importa el componente CarritoIcono

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Aquí agregamos el CDN de Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        {/* Agrega el favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-black">
        <Provider store={store}>
          <header className="bg-red-600 text-white p-4 flex items-center">
            <div className="container mx-auto flex items-center">
              {/* Envolvemos el logo en un Link para redirigir a la pantalla principal */}
              <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                <img src="/pantalla-principal/logo-negro.png" alt="Logo CNC" className="h-12 w-auto mr-4" />
                <h1 className="text-2xl font-bold">LEGION CNC</h1>
              </Link>
              <nav className="ml-auto flex items-center space-x-6">
                {/* Usa el componente CarritoIcono */}
                <CarritoIcono />
              </nav>
            </div>
          </header>
          <main className="container mx-auto p-4">{children}</main>
          <footer className="bg-black text-white p-4 mt-8">
            <div className="container mx-auto text-center">
              <p>&copy; 2025 TST SOLUTIONS. Todos los derechos reservados.</p>
            </div>
          </footer>
          {/* Botón flotante de WhatsApp */}
          <div className="fixed bottom-4 right-4 flex items-center space-x-2 group">
            <span className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">¡Contáctanos!</span>
            <a
              href="https://wa.me/593998631238"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition text-3xl group-hover:scale-110 group-hover:rotate-12"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </Provider>
      </body>
    </html>
  );
}
