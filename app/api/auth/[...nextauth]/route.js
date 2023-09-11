import NextAuth from "next-auth"; //maybe do it again to get the autho fill option
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},

  async signIn({ profile }) {},
});

export { handler as GET, handler as POST };
