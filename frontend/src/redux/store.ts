import { configureStore } from '@reduxjs/toolkit';
import carritoReducer from './carritoSlice';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from './persistState';

const preloadedState = {
  carrito: loadStateFromLocalStorage() || { productos: [] }, // Cargar el estado guardado
};

export const store = configureStore({
  reducer: {
    carrito: carritoReducer,
  },
  preloadedState, // Inicializar Redux con estado persistente
});

// Suscribirse a cambios y guardar en localStorage
store.subscribe(() => {
  saveStateToLocalStorage(store.getState().carrito);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
