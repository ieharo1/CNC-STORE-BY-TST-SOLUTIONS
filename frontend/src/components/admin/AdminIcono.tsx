'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function AdminIcono() {
  const [isClient, setIsClient] = useState(false); // Estado para verificar si estamos en el cliente

  // Verifica si el componente está en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Si no estamos en el cliente aún, no renderizamos nada
  if (!isClient) {
    return null;
  }
  return (
    <Link href="/pages/admin" className="text-white hover:underline flex items-center relative">
      <div className="flex items-center">
        {/* Aquí puedes agregar un ícono o imagen de administrador */}
        <i className="fas fa-shield-alt text-2xl"></i>
      </div>
    </Link>
  );
}