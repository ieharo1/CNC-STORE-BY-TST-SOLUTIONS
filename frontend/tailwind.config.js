module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}", // Escanea archivos en la carpeta app
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{html,js,jsx,ts,tsx}", // Asegúrate de que tus archivos estén incluidos aquí
    ],
    darkMode: 'class', // Activar el modo oscuro mediante clase
    theme: {
        extend: {},
    },
    plugins: [],
};