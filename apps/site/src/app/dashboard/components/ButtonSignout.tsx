"use client";

import { signOut } from "@repo/auth";
import { Button } from "@repo/ui/lib/atoms/button";
import { redirect } from "next/navigation";

export const ButtonSignout = () => {
  const handleSignout = () => {
    signOut();
    redirect('/sign-in');
  }
  return (
    <Button
      onClick={handleSignout}
    >
      Sign Out
    </Button>
  );
};
