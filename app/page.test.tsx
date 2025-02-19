import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("should render the Next.js logo", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
  });

  it("should render the 'Get started by editing' text", () => {
    render(<Home />);
    const getStartedText = screen.getByText(/Get started by editing/i);
    expect(getStartedText).toBeInTheDocument();
  });

  it("should render the 'Demo from workspace' text", () => {
    render(<Home />);
    const demoText = screen.getByText(/Demo from workspace/i);
    expect(demoText).toBeInTheDocument();
  });

  it("should render the 'Deploy now' link", () => {
    render(<Home />);
    const deployLink = screen.getByText(/Deploy now/i);
    expect(deployLink).toBeInTheDocument();
  });

  it("should render the 'Read our docs' link", () => {
    render(<Home />);
    const docsLink = screen.getByText(/Read our docs/i);
    expect(docsLink).toBeInTheDocument();
  });
});
