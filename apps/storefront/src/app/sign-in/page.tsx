"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@repo/auth";
import { FormLogin } from "@repo/ui/lib/organisms/forms/form-login";

import styles from "./page.module.scss";

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>(undefined);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(undefined);

    const formData = new FormData(e.currentTarget);

    const res = await signIn.email({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (res.error) {
      setError(res.error.message || "Something went wrong.");
    } else {
      router.push("/dashboard");
    }
  }

  const handleResetPassword = () => {
    // Handle reset password logic here
    console.log("Reset Password clicked");
  };

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log("Sign Up clicked");
    router.push("/sign-up");
  };

  return (
    <main className={styles.container}>
      <FormLogin
        onSubmit={handleSubmit}
        onResetPassword={handleResetPassword}
        onSignUp={handleSignUp}
        error={error}
      />
    </main>
  );
}
