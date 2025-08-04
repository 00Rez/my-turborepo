import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";
import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";

vi.mock('devextreme-react/button', () => ({
  default: ({ children, ...props }: PropsWithChildren) => (
    <button {...props}>{children}</button>
  ),
}));

describe(Button.name, () => {
  it("renders", () => {
    const { container } = render(<Button>Example button</Button>);
    expect(container).toMatchSnapshot();
  });
});
