import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials, req) {
        const res = await fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (user) {
          return user;
        } else {
          return null;
        }

        // if (!credentials?.email || !credentials.password) {
        //   return null;
        // } else {
        //   const user = { name: credentials?.email, email: credentials.email };
        //   return user as User;
        // }
      },
    }),
  ],

  pages: {
    signIn: "/api/auth/signin",
  },
  session: {
    strategy: "jwt", // <-- make sure to use jwt here
  },
  callbacks: {
    async jwt({ token, user, account }) {
      return {
        ...token,
        ...user,
        ...account,
      };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
