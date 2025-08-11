"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@repo/auth";
import { FormSignup } from "@repo/ui/lib/organisms/forms/form-signup";

import styles from "./page.module.scss";

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);

    e.preventDefault();
    setError(undefined);

    const formData = new FormData(e.currentTarget);

    const res = await signUp.email({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (res.error) {
      setError(res.error.message || "Something went wrong.");
    } else {
      router.push("/dashboard");
    }

    setLoading(false);
  }

  const handleResetPassword = () => {
    // Handle reset password logic here
    console.log("Reset Password clicked");
  };

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log("Sign In clicked");
    router.push("/sign-in");
  };

  return (
    <main className={styles.container}>
      <FormSignup
        onSubmit={handleSubmit}
        onResetPassword={handleResetPassword}
        onSignUp={handleSignUp}
        error={error}
        loading={loading}
      />
    </main>
  );
}
