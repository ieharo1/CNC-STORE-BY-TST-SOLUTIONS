// frontend/src/components/LoginIcono.tsx
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginIcono() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center space-x-2">
      {session ? (
        <>
          <span className="text-white">{session.user?.email}</span>
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