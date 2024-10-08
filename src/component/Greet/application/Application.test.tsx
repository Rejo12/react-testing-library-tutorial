import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const screenHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(screenHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory", {
      selector: "p",
    });
    expect(paragraphElement).toBeInTheDocument();

    const paragraphElement2 = screen.getByText("ields are", { exact: false });
    expect(paragraphElement2).toBeInTheDocument();

    const paragraphElement3 = screen.getByText(/FIELDS ARE/i);
    expect(paragraphElement3).toBeInTheDocument();

    const paragraphElement4 = screen.getByText((content) =>
      content.includes("mandatory")
    );

    expect(paragraphElement4).toBeInTheDocument();

    const titleElement = screen.getByTitle("close");
    expect(titleElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("John");
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
    expect(submitButtonElement).toBeDisabled();

    // https://www.w3.org/TR/html-aria/#docconformance
    // ARIA document for all html elements
  });
});
