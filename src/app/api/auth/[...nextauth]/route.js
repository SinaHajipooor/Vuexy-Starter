import CredentialsProvider from "next-auth/providers/credentials";
export { login } from '@/libs/auth/auth'

export const options = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials) {
                const userInfo = {
                    "username": credentials.username,
                    "password": credentials.password
                }

                const response = await login(userInfo)

                const userData = response?.data;


                if (userData.token) {

                    return { ...userData, apiToken: userData.token, role: 'user' }
                }
                else {
                    return { error: response?.message }
                }
            },

        }),
    ],
    callbacks: {
        async session({ session, token }) {
            const myToken = token.apiToken
            session.myToken = myToken

            return {
                ...session, user: token
            }
        },
        async signIn({ user }) {
            if (user?.error) {
                throw new Error(user?.error);
            }

            return true
        },
        async jwt({ token, user, trigger, session }) {
            if (trigger === 'update') {
                return { ...token, ...session?.user }
            }

            if (user) {
                return {
                    ...token, ...user
                }
            }

            return token
        },

    },
    pages: {
        signIn: '/auth/login',
    },
    session: {
        maxAge: 60 * 60 * 7,
    },
}



