"use server";

import { auth } from "@repo/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const authenticate = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }
};
