// frontend/src/api.ts
export async function getRole(email: string) {
    const response = await fetch(`http://localhost:3001/api/role/${email}`);
    if (!response.ok) {
      throw new Error('Error al obtener el rol');
    }
    const data = await response.json();
    return data.role;
  }