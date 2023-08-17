import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {

    // Configure one or more authentication providers
    pages: {
        signIn: '/auth/login'
    },
    providers: [
        GithubProvider({
            clientId: 'Iv1.074c2cff375a5b37',
            clientSecret: '963084c1cd2383f91698a02099228b71fc21b9ee'
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "rajankumar@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // return null;
                if (credentials) {
                    // Any object returned will be saved in `user` property of the JWT
                    return credentials
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
                }
            }
        })
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)