'use client'; // Asegura que este archivo sea tratado como un componente del lado del cliente

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { agregarProducto } from '../../redux/carritoSlice';

export default function Catalogo() {
  const dispatch = useDispatch();
  const productos = [
    {
      id: 1,
      nombre: 'Máquina CNC 1',
      precio: 1000,
      foto: '/carrito/cncmaquina.jpg', // Ruta de la imagen de la máquina
      caracteristicas: ['Corte de alta precisión', 'Velocidad de trabajo 1000 rpm', 'Compatibilidad con múltiples materiales'],
    },
    {
      id: 2,
      nombre: 'Máquina CNC 2',
      precio: 1500,
      foto: '/carrito/cncmaquina.jpg', // Ruta de la imagen de la máquina
      caracteristicas: ['Corte láser', 'Velocidad de trabajo 1200 rpm', 'Sistema de enfriamiento integrado'],
    },
    {
      id: 3,
      nombre: 'Máquina CNC 3',
      precio: 2000,
      foto: '/carrito/cncmaquina.jpg', // Ruta de la imagen de la máquina
      caracteristicas: ['Corte y grabado', 'Hasta 2000 rpm', 'Pantalla táctil'],
    },
  ];

  const handleAgregarAlCarrito = (producto: any) => {
    dispatch(agregarProducto(producto));
  };

  // Estado para abrir/cerrar la imagen en el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>(''); // Especificamos que selectedImage es de tipo string

  // Función para abrir el modal con la imagen seleccionada
  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-600 mb-4">Catálogo de Productos</h1>
      <div className="bg-gray-100 rounded-lg pt-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white border p-4 rounded-lg shadow-lg">
              {/* Foto de la máquina */}
              <img
                src={producto.foto}
                alt={producto.nombre}
                className="w-full h-100 object-cover rounded-lg mb-4 transform transition duration-300 hover:scale-105" // Efecto hover
                onClick={() => openModal(producto.foto)} // Abrir el modal al hacer clic
              />
              <h2 className="text-xl font-semibold">{producto.nombre}</h2>
              <p className="mt-2 text-gray-700 font-bold text-lg">${producto.precio}</p>
                <p className="mt-2 text-gray-700">Características:</p>
              {/* Características */}
              <ul className="mt-4 text-gray-600">
                {producto.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="text-sm">- {caracteristica}</li>
                ))}
              </ul>

              {/* Botón para agregar al carrito */}
              <button
                onClick={() => handleAgregarAlCarrito(producto)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-700 transition duration-300"
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de imagen */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Imagen grande" className="max-w-2xl max-h-196 object-contain" />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-white text-2xl font-bold bg-red-600 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-700"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}