"use client";

import { useSession } from "@repo/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/sign-in");
    } else {
      router.push("/dashboard");
    }
  }, [isPending, session, router]);
}
