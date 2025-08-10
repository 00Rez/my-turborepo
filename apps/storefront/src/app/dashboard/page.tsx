import { authenticate } from "../../util/authenticate";
import { ButtonSignout } from "./components/ButtonSignout";

export default async function DashboardPage() {
  await authenticate();

  return (
    <main>
      <h1>Dash</h1>
      <ButtonSignout />
    </main>
  );
}
