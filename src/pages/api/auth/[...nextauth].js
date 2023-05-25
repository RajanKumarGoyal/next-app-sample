import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {

    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: 'Iv1.074c2cff375a5b37',
            clientSecret: '963084c1cd2383f91698a02099228b71fc21b9ee',
        }),
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)