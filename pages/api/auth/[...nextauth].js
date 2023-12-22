import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '2cb71368ab1b55743d1f',
      clientSecret: '84e2c20639967ed5cb1d8775b4508db024d94016',
    }),
  ],
  secret : 'qwer1234'
};
export default NextAuth(authOptions); 