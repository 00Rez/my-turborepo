"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/lib/atoms/button";
import styles from "./page.module.scss";

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.container}>
      <div className={styles.options}>
        <Button onClick={() => router.push("/sign-in")} variant="primary">Sign In</Button>
        <Button onClick={() => router.push("/sign-up")} variant="secondary">Sign Up</Button>
      </div>
    </main>
  );
}
