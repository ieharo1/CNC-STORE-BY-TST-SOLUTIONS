export const loadStateFromLocalStorage = () => {
  try {
    if (typeof window === "undefined") return undefined; // Evita errores en SSR
    const serializedState = localStorage.getItem("carritoState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error("Error al cargar el estado desde localStorage:", error);
    return undefined;
  }
};

export const saveStateToLocalStorage = (state: any) => {
  try {
    localStorage.setItem("carritoState", JSON.stringify(state));
  } catch (error) {
    console.error("Error al guardar el estado en localStorage:", error);
  }
};
