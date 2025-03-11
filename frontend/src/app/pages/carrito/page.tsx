'use client';

import { useSelector, useDispatch } from 'react-redux';
import { eliminarProducto, incrementarCantidad, decrementarCantidad } from '../../../redux/carritoSlice';
import type { RootState } from '../../../redux/store';
import { useEffect, useState } from 'react';


export default function Carrito() {
  const [isMounted, setIsMounted] = useState(false); // Estado para verificar si el componente está montado
  const productos = useSelector((state: RootState) => state.carrito.productos);
  const [isClient, setIsClient] = useState(false); // Estado para verificar si estamos en el cliente
  const dispatch = useDispatch();


  useEffect(() => {
    setIsMounted(true); // Marca el componente como montado
    setIsClient(true);
  }, []);

  const handleEliminarDelCarrito = (_id: string) => { // Cambia el tipo a `string`
    dispatch(eliminarProducto(_id));
  };

  const handleIncrementarCantidad = (_id: string) => { // Cambia el tipo a `string`
    dispatch(incrementarCantidad(_id));
  };

  const handleDecrementarCantidad = (_id: string) => { // Cambia el tipo a `string`
    dispatch(decrementarCantidad(_id));
  };

  // Si el componente no está montado, no renderices nada
  if (!isMounted) {
    return null;
  }
  // Si no estamos en el cliente aún, no renderizamos nada
  if (!isClient) {
    return null;
  }
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Carrito de Compras</h1>
      {productos.length === 0 ? (
        <p className="text-lg">No hay productos en el carrito.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4">
          {productos.map((producto) => (
            <div key={producto._id} className="border p-4 rounded-lg bg-white">
              {/* Foto de la máquina */}
              <img
                src={producto.foto}
                alt={producto.nombre}
                className="w-full h-100 object-cover rounded-lg mb-4 transform transition duration-300 hover:scale-105" // Efecto hover
              />
              <h2 className="text-xl font-semibold">{producto.nombre}</h2>
              <p className="mt-2 text-gray-700 font-bold text-lg">${producto.precio}</p>
              <div className="mt-2 text-gray-700 flex items-center">
                <p className="mr-2 text-gray-700">Cantidad: {producto.cantidad}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDecrementarCantidad(producto._id)}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-sm flex items-center justify-center"
                  >
                    <i className="fas fa-arrow-down text-lg"></i>
                  </button>
                  <button
                    onClick={() => handleIncrementarCantidad(producto._id)}
                    className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 text-sm flex items-center justify-center"
                  >
                    <i className="fas fa-arrow-up text-lg"></i>
                  </button>
                </div>
              </div>
              <p className="mt-2 text-gray-700">Características:</p>
              {/* Características */}
              <ul className=" text-gray-600">
                {producto.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="text-sm">- {caracteristica}</li>
                ))}
              </ul>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleEliminarDelCarrito(producto._id)}
                  className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 text-sm flex items-center justify-center"
                >
                  <i className="fas fa-trash-alt mr-2 text-lg"></i>Eliminar
                </button>
              </div>
            </div>

          ))}
        </div>
      )}
    </div>
  );
}