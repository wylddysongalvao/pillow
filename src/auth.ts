import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async authorized({ auth }) {
      return !!auth;
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!(email === 'demo@demo' && password === 'demo')) {
          throw new Error('Invalid email or password');
        }

        return {
          id: 'demo',
          name: 'Demo',
          email: 'demo@pillow.com',
          image: 'https://placecats.com/neo_banana/64/64?fit=contain&position=center',
        };
      },
    }),
  ],
});
