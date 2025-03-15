'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginIcono() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<string>('light'); // Estado para el tema
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Cambiar el tema
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
  };

  // Al cargar la página, establecer el tema guardado en localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      setTheme('light');
      document.documentElement.classList.add('light');
    }

    // Cerrar el menú si el clic es fuera del menú o del botón
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);  // Cierra el menú
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Botón de perfil */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="focus:outline-none"
      >
        <Image
          src={session?.user?.image || '/default-avatar.png'}
          alt="Perfil"
          width={40}
          height={40}
          className="rounded-full" // Solo 'rounded-full' para un círculo perfecto sin bordes
        />
      </button>

      {/* Menú desplegable */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute bg-gray-700 shadow-lg rounded-lg py-2 text-white w-48"
          style={{
            top: '150%',
            right: -70,
            zIndex: 50, // 🔥 ALTA PRIORIDAD SOBRE TODO
          }}
        >
          <ul className="py-2 text-white text-left">
            <li className="px-6 py-3 flex items-center space-x-4 cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-600">
              <i className="fas fa-user-circle text-gray-300 text-lg mr-2"></i>
              <span>{session?.user?.name || 'Usuario'}</span>
            </li>
            <li className="px-6 py-3 flex items-center space-x-4 cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-600">
              <i className="fas fa-shopping-cart text-gray-300 text-lg mr-2"></i>
              <Link href="/carrito">Mi Carrito</Link>
            </li>
            <li className="px-6 py-3 flex items-center space-x-4 cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-600">
              <i className="fas fa-cog text-gray-300 text-lg mr-2"></i>
              <Link href="/configuracion">Configuración</Link>
            </li>
            {/* Opción de tema */}
            <li
              className="px-6 py-3 flex items-center space-x-4 cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-600"
              onClick={toggleTheme}
            >
              <i className="fas fa-adjust text-gray-300 text-lg mr-2"></i>
              <span>{theme === 'light' ? 'Tema: Claro' : 'Tema: Oscuro'}</span>
            </li>
            <li className="px-6 py-3 flex items-center space-x-4 cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-600">
              <i className="fas fa-sign-out-alt text-gray-300 text-lg mr-2"></i>
              <button onClick={() => signOut()}>Cerrar Sesión</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
