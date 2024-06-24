import { connectToDB, executeQuery } from "@/lib/db2";
import { verifyPassword } from "@/lib/hash";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const sql = "SELECT * FROM users WHERE email = ?";
        const user = await executeQuery(sql, credentials.email);
        if (Object.keys(user).length === 0) {
          return null;
        }
        const isValid = await verifyPassword(
          user[0].password,
          credentials.password
        );
        if (!isValid) {
          return null;
        }
        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
