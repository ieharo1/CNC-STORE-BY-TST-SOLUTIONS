import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Producto {
  _id: string; // Cambia `id` por `_id`
  nombre: string;
  precio: number;
  foto: string;
  caracteristicas: string[];
  cantidad: number;
}

interface CarritoState {
  productos: Producto[];
}

const initialState: CarritoState = {
  productos: [],
};

const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    setCarrito: (state, action: PayloadAction<CarritoState>) => {
      return action.payload;
    },
    agregarProducto: (state, action: PayloadAction<Producto>) => {
      const productoExistente = state.productos.find((p) => p._id === action.payload._id); // Usa `_id`
      if (productoExistente) {
        productoExistente.cantidad += 1;
      } else {
        state.productos.push({ ...action.payload, cantidad: 1 });
      }
    },
    eliminarProducto: (state, action: PayloadAction<string>) => { // Cambia el tipo a `string`
      state.productos = state.productos.filter((p) => p._id !== action.payload); // Usa `_id`
    },
    incrementarCantidad: (state, action: PayloadAction<string>) => { // Cambia el tipo a `string`
      const producto = state.productos.find((p) => p._id === action.payload); // Usa `_id`
      if (producto) {
        producto.cantidad += 1;
      }
    },
    decrementarCantidad: (state, action: PayloadAction<string>) => { // Cambia el tipo a `string`
      const producto = state.productos.find((p) => p._id === action.payload); // Usa `_id`
      if (producto && producto.cantidad > 1) {
        producto.cantidad -= 1;
      } else {
        state.productos = state.productos.filter((p) => p._id !== action.payload); // Usa `_id`
      }
    },
  },
});

export const { setCarrito, agregarProducto, eliminarProducto, incrementarCantidad, decrementarCantidad } =
  carritoSlice.actions;

export default carritoSlice.reducer;