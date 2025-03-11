'use client';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { agregarProducto } from '../../../redux/carritoSlice';
import axios from 'axios';

interface Producto {
  _id: string;
  nombre: string;
  precio: number;
  foto: string;
  caracteristicas: string[];
  cantidad: number;
}

export default function Catalogo() {
  const dispatch = useDispatch();
  const [productos, setProductos] = useState<Producto[] | null>(null); // ⬅️ Inicialmente `null`
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false); // Estado para verificar si estamos en el cliente


  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get<Producto[]>('http://localhost:3001/api/products');
        setProductos(response.data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Ocurrió un error');
      }
    };

    fetchProductos();
    setIsClient(true);
  }, []);

  const handleAgregarAlCarrito = (producto: Producto) => {
    dispatch(agregarProducto({ ...producto, cantidad: 1 }));
  };

  // 👇 Esto evita el error de hidratación porque Next.js no renderiza contenido diferente en SSR y CSR
  if (!productos) {

    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Catálogo de Productos</h1>
        <p className="text-lg">No hay productos en el catálogo.</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-lg text-red-600">Error: {error}</p>;
  }
  // Si no estamos en el cliente aún, no renderizamos nada
  if (!isClient) {
    return null;
  }
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Catálogo de Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4">
        {productos.map((producto) => (
          <div key={producto._id} className="bg-white border p-4 rounded-lg shadow-lg">
            <img
              src={producto.foto}
              alt={producto.nombre}
              className="w-full h-100 object-cover rounded-lg mb-4 transform transition duration-300 hover:scale-105" // Efecto hover
            />
            <h2 className="text-xl font-semibold">{producto.nombre}</h2>
            <p className="mt-2 text-gray-700 font-bold text-lg">${producto.precio}</p>
            <ul className="mt-4 text-gray-600">
              {producto.caracteristicas.map((caracteristica, index) => (
                <li key={index} className="text-sm">- {caracteristica}</li>
              ))}
            </ul>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleAgregarAlCarrito(producto)}
                className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 text-sm"
              >
                <i className="fas fa-plus mr-2 text-lg"></i>Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
