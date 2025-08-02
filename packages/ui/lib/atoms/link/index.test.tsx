import { describe, it } from "@jest/globals";
import { createRoot } from "react-dom/client";
import { Link } from ".";

describe(Link.name, () => {
  it("renders", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<Link href="https://example.com">Example link</Link>);
    root.unmount();
  });
});
