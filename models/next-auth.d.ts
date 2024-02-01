import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      exp: number;
      iat: number;
      jti: string;
      name: string;
      picture: string;
      sub: string;
      access_token?: string | null;
      refreshToken?: string;
    };
    accessToken?: string | null;
  }
}
