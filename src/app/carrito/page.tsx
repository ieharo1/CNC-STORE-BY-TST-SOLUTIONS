'use client'; // Asegúrate de marcar este archivo como un Client Component

import { useSelector, useDispatch } from 'react-redux';
import { eliminarProducto } from '../../redux/carritoSlice';
import type { RootState } from '../../redux/store';

export default function Carrito() {
  const productos = useSelector((state: RootState) => state.carrito.productos);
  const dispatch = useDispatch();

  console.log('Productos en el carrito:', productos); // Depuración

  const handleEliminarDelCarrito = (id: number) => {
    dispatch(eliminarProducto(id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-600 mb-4">Carrito de Compras</h1>
      {productos.length === 0 ? (
        <p className="text-lg">No hay productos en el carrito.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productos.map((producto) => (
            <div key={producto.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{producto.nombre}</h2>
              <p className="text-gray-700">${producto.precio}</p>
              <button
                onClick={() => handleEliminarDelCarrito(producto.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-700 transition duration-300"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}