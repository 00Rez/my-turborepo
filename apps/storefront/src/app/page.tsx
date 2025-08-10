import { redirect } from "next/navigation";
import { authenticate } from "../util/authenticate";

export default async function Home() {
  await authenticate();
  redirect('/dashboard');
}
