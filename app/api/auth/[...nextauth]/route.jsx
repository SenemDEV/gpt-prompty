import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";

console.log({
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
});

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},

  async signIn({ profile }) {
    //serverless route -> lambda function -> only when called is being connected to the DB

    try {
      await connectToDB();

      // chaeck if a user already exists

      // if not, create a new user

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});
