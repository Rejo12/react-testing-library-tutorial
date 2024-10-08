import { render, screen } from "@testing-library/react";
import { Greet } from "../component/Greet/Greet";

describe("Greet", () => {
  it("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("Greet renders with a name", () => {
    render(<Greet name="John" />);
    const textElement = screen.getByText("Hello John");
    expect(textElement).toBeInTheDocument();
  });
});
