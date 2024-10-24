import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const {
	handlers: { GET, POST },
	auth,
} = NextAuth({
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize(credentials) {
				console.log(credentials);
				if (credentials.password === '1234') {
					return { id: '1', name: 'Rúbem', email: 'teste@teste.com' };
				} else {
					return null;
				}
			},
		}),
	],
});
