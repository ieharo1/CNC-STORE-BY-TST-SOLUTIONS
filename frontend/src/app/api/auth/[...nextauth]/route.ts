// frontend/src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            // Lista de correos electrónicos que tendrán el rol de admin
            const adminEmails = ['admin@example.com', 'zackharo1@gmail.com']; // Agrega los correos de los administradores

            // Determinar el rol del usuario
            const role = adminEmails.includes(user.email || '') ? 'admin' : 'cliente';

            // Guardar la información del usuario en MongoDB
            const response = await fetch('http://localhost:3001/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: user.email,
                    name: user.name,
                    role: role, // Asignar el rol correspondiente
                }),
            });

            if (!response.ok) {
                return false;
            }

            return true;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };