'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { createPortal } from 'react-dom';

// Definimos el tipo Producto
interface Producto {
    _id: string;
    id: number;
    nombre: string;
    precio: number;
    foto: string;
    caracteristicas: string[];
}

const AdminProductos = () => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [foto, setFoto] = useState('');
    const [caracteristicas, setCaracteristicas] = useState('');
    const [editingProduct, setEditingProduct] = useState<Producto | null>(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState<Producto | null>(null);

    // Función para obtener productos
    const fetchProductos = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/products');
            setProductos(response.data);
        } catch (error) {
            console.error('Error al obtener productos', error);
        }
    };

    // Cargar productos cuando el componente se monta
    useEffect(() => {
        fetchProductos();
    }, []);

    // Función para agregar producto
    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();

        const newProducto = {
            nombre,
            precio: parseFloat(precio),
            foto,
            caracteristicas: caracteristicas.split(',').map((item) => item.trim()),
        };

        try {
            await axios.post('http://localhost:3001/api/products', newProducto);
            setNombre('');
            setPrecio('');
            setFoto('');
            setCaracteristicas('');
            fetchProductos();
            setShowCreateModal(false);
        } catch (error) {
            console.error('Error al agregar producto', error);
        }
    };

    // Función para editar producto
    const handleEdit = async (e: React.FormEvent) => {
        e.preventDefault();

        const updatedProducto = {
            nombre,
            precio: parseFloat(precio),
            foto,
            caracteristicas: caracteristicas.split(',').map((item) => item.trim()),
        };

        try {
            if (editingProduct) {
                await axios.put(`http://localhost:3001/api/products/${editingProduct._id}`, updatedProducto);
                setEditingProduct(null);
                setShowEditModal(false);
                fetchProductos();
            }
        } catch (error) {
            console.error('Error al editar producto', error);
        }
    };

    // Función para eliminar producto
    const handleDelete = async () => {
        if (productToDelete) {
            try {
                await axios.delete(`http://localhost:3001/api/products/${productToDelete._id}`);
                fetchProductos();
                setShowDeleteModal(false);
            } catch (error) {
                console.error('Error al eliminar producto', error);
            }
        }
    };

    // Función para iniciar edición
    const openEditModal = (producto: Producto) => {
        setEditingProduct(producto);
        setNombre(producto.nombre);
        setPrecio(producto.precio.toString());
        setFoto(producto.foto);
        setCaracteristicas(producto.caracteristicas.join(', '));
        setShowEditModal(true);
    };

    // Función para abrir el modal de eliminación
    const openDeleteModal = (producto: Producto) => {
        setProductToDelete(producto);
        setShowDeleteModal(true);
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-red-600 mb-6">Administrar Productos</h1>
            {/* Botón para crear un nuevo producto */}
            <button
                onClick={() => setShowCreateModal(true)}
                className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 mb-6 flex items-center text-sm lg:text-base mr-4"
            >
                <i className="fas fa-plus mr-2 text-lg"></i>Crear Producto
            </button>

            {/* Lista de productos */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4">
                {productos.map((producto) => (
                    <div key={producto._id} className="border p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition duration-300">
                        <img
                            src={producto.foto}
                            alt={producto.nombre}
                            className="w-full h-100 object-cover rounded-lg mb-4 transform transition duration-300 hover:scale-105"
                        />
                        <h2 className="text-xl font-semibold">{producto.nombre}</h2>
                        <p className="mt-2 text-gray-700 font-bold text-lg">${producto.precio}</p>
                        <p className="mt-2 text-gray-700">Características:</p>
                        <ul className="text-gray-600 text-sm">
                            {producto.caracteristicas.map((caracteristica, index) => (
                                <li key={index}>- {caracteristica}</li>
                            ))}
                        </ul>
                        <div className="flex gap-2 mt-4">
                            <button
                                onClick={() => openEditModal(producto)}
                                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-sm"
                            >
                                <i className="fas fa-edit mr-2 text-lg"></i>Editar
                            </button>
                            <button
                                onClick={() => openDeleteModal(producto)}
                                className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 text-sm"
                            >
                                <i className="fas fa-trash-alt mr-2 text-lg"></i>Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal para crear producto */}
            {showCreateModal && createPortal(
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-semibold mb-4">Crear Producto</h2>
                        <form onSubmit={handleCreate} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Nombre del producto"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                            <input
                                type="number"
                                placeholder="Precio"
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                            <input
                                type="text"
                                placeholder="URL de la foto"
                                value={foto}
                                onChange={(e) => setFoto(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                            <input
                                type="text"
                                placeholder="Características separadas por coma"
                                value={caracteristicas}
                                onChange={(e) => setCaracteristicas(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                            <button
                                type="submit"
                                className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                            >
                                Agregar Producto
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowCreateModal(false)}
                                className="w-full p-3 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition duration-300 mt-4"
                            >
                                Cancelar
                            </button>
                        </form>
                    </div>
                </div>,
                document.body
            )}

            {/* Modal para editar producto */}
            {showEditModal && createPortal(
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-semibold mb-4">Editar Producto</h2>
                        <form onSubmit={handleEdit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Nombre del producto"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                            <input
                                type="number"
                                placeholder="Precio"
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                            <input
                                type="text"
                                placeholder="URL de la foto"
                                value={foto}
                                onChange={(e) => setFoto(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                            <input
                                type="text"
                                placeholder="Características separadas por coma"
                                value={caracteristicas}
                                onChange={(e) => setCaracteristicas(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                            <button
                                type="submit"
                                className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Actualizar Producto
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowEditModal(false)}
                                className="w-full p-3 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition duration-300 mt-4"
                            >
                                Cancelar
                            </button>
                        </form>
                    </div>
                </div>,
                document.body
            )}

            {/* Modal de confirmación de eliminación */}
            {showDeleteModal && createPortal(
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                        <h2 className="text-xl font-semibold mb-4 text-center">
                            ¿Estás seguro de eliminar este producto?
                        </h2>
                        <div className="flex justify-center items-center mb-4">
                            {/* Icono de advertencia */}
                            <i className="fas fa-exclamation-triangle text-yellow-600 text-4xl mr-4"></i>
                            <p className="text-lg text-gray-700">Esta acción no puede deshacerse.</p>
                        </div>
                        <div className="flex justify-between">
                            <button
                                onClick={handleDelete}
                                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 w-1/3"
                            >
                                Sí, eliminar
                            </button>
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="bg-gray-300 text-black px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300 w-1/3"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}

        </div>
    );
};

export default AdminProductos;
