import { store } from './store';

export const persistState = () => {
  // Suscribirse a cambios en el store
  store.subscribe(() => {
    const state = store.getState();
    try {
      const serializedState = JSON.stringify(state.carrito);
      localStorage.setItem('carritoState', serializedState); // Guardar el estado en localStorage
    } catch (error) {
      console.error('Error al guardar el estado en localStorage:', error);
    }
  });
};