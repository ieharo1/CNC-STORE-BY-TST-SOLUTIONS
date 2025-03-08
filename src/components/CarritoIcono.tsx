'use client';

import { useSelector } from 'react-redux';
import Link from 'next/link';
import { RootState } from '../redux/store';
import { useEffect, useState } from 'react';

export default function CarritoIcono() {
  const [cantidadProductos, setCantidadProductos] = useState(0);
  const [isClient, setIsClient] = useState(false); // Estado para verificar si estamos en el cliente

  // Verifica si el componente está en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Accede al estado de Redux solo en el cliente
  const cantidadRedux = useSelector((state: RootState) =>
    isClient ? state.carrito.productos.reduce((total, producto) => total + producto.cantidad, 0) : 0
  );

  // Sincroniza el estado local con Redux
  useEffect(() => {
    if (isClient) {
      setCantidadProductos(cantidadRedux);
    }
  }, [cantidadRedux, isClient]);

  return (
    <Link href="/carrito" className="text-white hover:underline flex items-center relative">
      <div className="flex items-center">
        {cantidadProductos > 0 && (
          <div className="bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ml-auto mr-2">
            {cantidadProductos}
          </div>
        )}
        <i className="fas fa-shopping-cart text-2xl"></i>
      </div>
    </Link>
  );
}