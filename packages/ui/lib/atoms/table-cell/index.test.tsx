import { describe, it } from "@jest/globals";
import { createRoot } from "react-dom/client";
import { TableCell } from ".";

describe(TableCell.name, () => {
  it("renders", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<TableCell>Table cell test</TableCell>);
    root.unmount();
  });
});
