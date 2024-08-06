"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";

import { RegisterSchemas } from "@/schemas";
import { error } from "console";
import { getUserByUserName } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchemas>) => {
  const validateFields = RegisterSchemas.safeParse(values);

  if (!validateFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { password, name, username } = validateFields.data;

  console.log(validateFields.data);
  
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByUserName(username);
  if (existingUser) {
    return { error: "Username already exists" };
  }
  await db.user.create({
    data: {
      name,
      username,
      password: hashedPassword,
    },
  });



  // TODO: Send verification token email
  return {
    success: "User created successfully",
  };
};
