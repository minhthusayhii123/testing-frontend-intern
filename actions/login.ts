"use server";
import * as z from "zod";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { LoginSchemas } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async (values: z.infer<typeof LoginSchemas>) => {
  const validateField = LoginSchemas.safeParse(values);

  if (!validateField.success) {
    return {
      error: "Invalid fields!",
    };
  }
  const { username, password } = validateField.data;
  try {
    await signIn("credentials", {
      username,
      password,
      redirectTo: '/',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials'}
        default: 
        return { error : 'Something went wrong'}
      }
    }
    throw error;
  }
};
