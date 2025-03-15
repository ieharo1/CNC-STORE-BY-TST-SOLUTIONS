'use client'; // Asegúrate de marcar este archivo como un Client Component

import './globals.css';
import type { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Image from "next/image";
import Link from 'next/link'; // Importa Link desde Next.js
import CarritoIcono from '../components/carrito/CarritoIcono'; // Importa el componente CarritoIcono
import AdminIcono from '../components/admin/AdminIcono'; // Importa el componente AdminIcono
import LoginIcono from '../components/login/LoginIcono'; // Importa el componente LoginIcono

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
        <SessionProvider>
          <Provider store={store}>
            <header className="bg-red-600 text-white p-4 flex items-center relative">
              <div className="container mx-auto flex items-center justify-between w-full">
                {/* Espacio a la izquierda para el carrito */}
                <div className="flex items-center space-x-4">
                  <Link href="/" className="text-white hover:underline flex items-center relative">
                    <div className="flex items-center">
                      <i className="fas fa-home text-2xl"></i>
                    </div>
                  </Link>
                  <AdminIcono />
                </div>
                {/* Espacio a la derecha para el login y admin */}
                <div className="flex items-center space-x-4">
                  <CarritoIcono />
                  <LoginIcono />
                </div>
              </div>
              {/* Logo centrado con posicionamiento absoluto */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/pantalla-principal/logo-negro.png" // Ruta de tu logo
                    alt="Logo LEGION CNC"
                    width={40}
                    height={40}
                    className="h-10 w-auto sm:h-12 md:h-14" // Tamaño responsivo
                  />
                </Link>
              </div>
            </header>
            <main className="container mx-auto p-4">{children}</main>
            <footer className="bg-red-600 text-white p-4 mt-8">
              <div className="container mx-auto text-center text-sm sm:text-base">
                <p>&copy; 2025 TST SOLUTIONS. Todos los derechos reservados.</p>
              </div>
            </footer>
            {/* Botón flotante de WhatsApp */}
            <div className="fixed bottom-4 right-4 flex items-center space-x-2 group">
              <span className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base lg:text-lg">¡Contáctanos!</span>
              <a
                href="https://wa.me/593998631238"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition text-2xl group-hover:scale-110 group-hover:rotate-12"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
