import './globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Aquí agregamos el CDN de Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className="bg-white text-black">
        <header className="bg-red-600 text-white p-4 flex items-center">
          <div className="container mx-auto flex items-center">
            <img src="/pantalla-principal/logo-negro.png" alt="Logo CNC" className="h-12 w-auto mr-4" />
            <h1 className="text-2xl font-bold">LEGION CNC</h1>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-black text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 LEGION CNC. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}