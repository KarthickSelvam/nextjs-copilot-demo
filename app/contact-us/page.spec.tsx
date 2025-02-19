import { render, screen, fireEvent } from "@testing-library/react";
import ContactUsPage from "./page";

describe("ContactUsPage", () => {
  it("renders the Contact Us heading", () => {
    render(<ContactUsPage />);
    const heading = screen.getByText("Contact Us");
    expect(heading).toBeInTheDocument();
  });

  it("renders the email input", () => {
    render(<ContactUsPage />);
    const emailInput = screen.getByPlaceholderText("Enter your email");
    expect(emailInput).toBeInTheDocument();
  });

  it("renders the password input", () => {
    render(<ContactUsPage />);
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    expect(passwordInput).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<ContactUsPage />);
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });

  it("updates the email state on input change", () => {
    render(<ContactUsPage />);
    const emailInput = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput.value).toBe("test@example.com");
  });

  it("updates the password state on input change", () => {
    render(<ContactUsPage />);
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(passwordInput.value).toBe("password123");
  });

  it("alerts with the email on form submit", () => {
    render(<ContactUsPage />);
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    window.alert = jest.fn();
    fireEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith(
      "Form submitted for test@example.com"
    );
  });
});
