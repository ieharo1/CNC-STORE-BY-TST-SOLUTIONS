import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  foto: string;
  caracteristicas: string[];
  cantidad: number; // Nueva propiedad
}

interface CarritoState {
  productos: Producto[];
}

// Cargar el estado inicial desde localStorage
const loadStateFromLocalStorage = (): CarritoState => {
  try {
    const serializedState = localStorage.getItem('carritoState');
    if (serializedState === null) {
      return { productos: [] }; // Estado inicial si no hay datos en localStorage
    }
    return JSON.parse(serializedState); // Cargar el estado desde localStorage
  } catch (error) {
    console.error('Error al cargar el estado desde localStorage:', error);
    return { productos: [] }; // Estado inicial en caso de error
  }
};

const initialState: CarritoState = loadStateFromLocalStorage(); // Usar el estado cargado desde localStorage

const carritoSlice = createSlice({
  name: 'carrito',
  initialState,
  reducers: {
    agregarProducto: (state, action: PayloadAction<Producto>) => {
      const productoExistente = state.productos.find((p) => p.id === action.payload.id);
      if (productoExistente) {
        productoExistente.cantidad += 1;
      } else {
        state.productos.push({ ...action.payload, cantidad: 1 });
      }
    },
    eliminarProducto: (state, action: PayloadAction<number>) => {
      state.productos = state.productos.filter((p) => p.id !== action.payload);
    },
    incrementarCantidad: (state, action: PayloadAction<number>) => {
      const producto = state.productos.find((p) => p.id === action.payload);
      if (producto) {
        producto.cantidad += 1;
      }
    },
    decrementarCantidad: (state, action: PayloadAction<number>) => {
      const producto = state.productos.find((p) => p.id === action.payload);
      if (producto && producto.cantidad > 1) {
        producto.cantidad -= 1;
      } else {
        // Si la cantidad es 1, elimina el producto del carrito
        state.productos = state.productos.filter((p) => p.id !== action.payload);
      }
    },
  },
});

export const { agregarProducto, eliminarProducto, incrementarCantidad, decrementarCantidad } = carritoSlice.actions;  
export default carritoSlice.reducer;