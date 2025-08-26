import { authenticate } from "../../util/authenticate";

import { Navbar } from "@repo/ui/lib/organisms/navbar";
import { NavbarLink } from "@repo/ui/lib/molecules/navbar-link";

import { ButtonSignout } from "./components/ButtonSignout";
import { GridTest } from "./components/GridTest";
import { DialogTest } from "./components/DialogTest";

import Image from "next/image";

export default async function DashboardPage() {
  await authenticate();

  return (
    <main>
      <Navbar>
        <div style={{ height: "100%", display: "flex" }}>
          <Image src="/logo.svg" priority width={414} height={187} alt="Acme Ltd" style={{ height: "100%", width: "auto" }} />
        </div>
        <NavbarLink href='google.com'>
          Services
        </NavbarLink>
        <NavbarLink href='google.com'>
          Pricing
        </NavbarLink>
        <NavbarLink href='google.com'>
          About us
        </NavbarLink>
        <div style={{ flex: 1 }}></div>
        <div style={{ marginRight: "1rem" }}>
          <ButtonSignout />
        </div>
      </Navbar>
      <section style={{ padding: "1rem", display: "grid", gridTemplateRows: "auto 1fr", gap: "1rem", height: "calc(100vh - 64px)" }}>
        <DialogTest />
        <GridTest />
      </section>
    </main>
  );
}
