import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchemas } from "@/schemas";
import { getUserByUserName } from "./data/user";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchemas.safeParse(credentials);

        if (validateFields.success) {
          const { username, password } = validateFields.data;

          const user = await getUserByUserName(username);
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
