'use client';

import Link from 'next/link';

export default function AdminIcono() {
  return (
    <Link href="/pages/admin" className="text-white hover:underline flex items-center relative">
      <div className="flex items-center">
        {/* Aquí puedes agregar un ícono o imagen de administrador */}
        <i className="fas fa-user-shield text-2xl"></i>
      </div>
    </Link>
  );
}