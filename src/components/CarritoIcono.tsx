'use client'; // Asegúrate de marcar este archivo como un Client Component

import { useSelector } from 'react-redux';
import { selectCantidadProductos } from '../redux/store';
import Link from 'next/link';

export default function CarritoIcono() {
  const cantidadProductos = useSelector(selectCantidadProductos);

  return (
    <Link href="/carrito" className="text-white hover:underline flex items-center relative">
      {/* Ícono de carrito */}
      <i className="fas fa-shopping-cart text-xl"></i>
      {/* Contador de productos en el carrito */}
      {cantidadProductos > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {cantidadProductos}
        </span>
      )}
    </Link>
  );
}