export default function Catalogo() {
  const productos = [
    { id: 1, nombre: 'Máquina CNC 1', precio: 1000 },
    { id: 2, nombre: 'Máquina CNC 2', precio: 1500 },
    { id: 3, nombre: 'Máquina CNC 3', precio: 2000 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-600 mb-4">Catálogo de Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productos.map((producto) => (
          <div key={producto.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{producto.nombre}</h2>
            <p className="text-gray-700">${producto.precio}</p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-700 transition duration-300">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}