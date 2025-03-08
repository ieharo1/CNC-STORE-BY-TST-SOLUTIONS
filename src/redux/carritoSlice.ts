import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Producto {
    id: number;
    nombre: string;
    precio: number;
    foto: string;
    caracteristicas: string[];
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
            state.productos.push(action.payload);
            console.log('Producto agregado:', action.payload); // Depuración
        },
        eliminarProducto: (state, action: PayloadAction<number>) => {
            state.productos = state.productos.filter((p) => p.id !== action.payload);
            console.log('Producto eliminado:', action.payload); // Depuración
        },
    },
});

export const { agregarProducto, eliminarProducto } = carritoSlice.actions;
export default carritoSlice.reducer;