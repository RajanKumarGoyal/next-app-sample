import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {

    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: 'Iv1.074c2cff375a5b37',
            clientSecret: '963084c1cd2383f91698a02099228b71fc21b9ee',
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "text", placeholder: "rajankumar@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                console.log('authorize', credentials);

                // Add logic here to look up the user from the credentials supplied
                const user = { 
                    id: "1", 
                    name: "J Smith", 
                    email: "jsmith@example.com" 
                };

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)