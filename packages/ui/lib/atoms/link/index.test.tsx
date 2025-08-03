import { describe, it, expect } from "vitest";
import { Link } from ".";
import { render } from "@testing-library/react";

describe(Link.name, () => {
  it("renders", () => {
    const { container } = render(<Link href="https://example.com">Example Link</Link>);
    expect(container).toMatchSnapshot();
  });
});
