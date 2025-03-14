// frontend/src/components/LoginIcono.tsx
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getRole } from '../../api';

export default function LoginIcono() {
  const { data: session, status } = useSession();
  const [role, setRole] = useState<string>('cliente');

  useEffect(() => {
    if (session?.user?.email) {
      getRole(session.user.email)
        .then((role) => setRole(role))
        .catch((error) => {
          console.error('Error al obtener el rol:', error);
          setRole('cliente'); // Rol predeterminado si hay un error
        });
    }
  }, [session]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  console.log('Sesión del usuario:', session); // Depuración
  console.log('Rol del usuario:', role); // Depuración

  return (
    <div className="flex items-center space-x-2">
      {session ? (
        <>
          <span className="text-white">{session.user?.email}</span>
          {role === 'admin' && ( // Mostrar contenido especial para administradores
            <>
              <Link href="/admin" className="text-white hover:text-gray-300">
                Panel de Admin
              </Link>
              <span className="text-green-500">(Es administrador)</span>
            </>
          )}
          <button
            onClick={() => signOut()}
            className="text-white hover:text-gray-300"
          >
            Cerrar sesión
          </button>
        </>
      ) : (
        <button
          onClick={() => signIn('google')}
          className="text-white hover:text-gray-300"
        >
          Iniciar sesión
        </button>
      )}
    </div>
  );
}