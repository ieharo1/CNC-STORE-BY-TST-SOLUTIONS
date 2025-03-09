import { configureStore } from '@reduxjs/toolkit';
import carritoReducer from './carritoSlice';
import { persistState } from './persistState';

export const store = configureStore({
  reducer: {
    carrito: carritoReducer,
  },
});

// Inicializar la persistencia del estado
persistState();

export const selectCantidadProductos = (state: RootState) => state.carrito.productos.length;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;