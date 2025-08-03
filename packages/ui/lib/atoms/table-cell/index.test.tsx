import { describe, expect, it } from "vitest";
import { TableCell } from ".";
import { render } from "@testing-library/react";

describe("TableCell", () => {
  it("renders", () => {
    const { container } = render(<TableCell>Example Link</TableCell>);
    expect(container).toMatchSnapshot();
  });
});
