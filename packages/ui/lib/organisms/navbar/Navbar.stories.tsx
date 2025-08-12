import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navbar } from "./Navbar";
import { NavbarLink } from "../../molecules/navbar-link/NavbarLink";
import { Button } from "../../atoms/button";

const meta = {
  title: 'Organisms/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Navbar>
      <div style={{ height: "100%", display: "flex" }}>
        <img src="/logo.svg" alt="Acme Ltd" />
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
        <Button>
          Sign out
        </Button>
      </div>
    </Navbar>
  ),
};