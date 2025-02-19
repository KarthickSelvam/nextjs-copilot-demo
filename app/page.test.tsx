import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders Next.js logo", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders 'Get started by editing app/page.tsx'", () => {
    render(<Home />);
    const getStartedText = screen.getByText(/Get started by editing/i);
    expect(getStartedText).toBeInTheDocument();
  });

  it("renders 'Demo from workspace'", () => {
    render(<Home />);
    const demoText = screen.getByText("Demo from workspace");
    expect(demoText).toBeInTheDocument();
  });

  it("renders 'Deploy now' button", () => {
    render(<Home />);
    const deployButton = screen.getByText("Deploy now");
    expect(deployButton).toBeInTheDocument();
  });

  it("renders 'Read our docs' button", () => {
    render(<Home />);
    const docsButton = screen.getByText("Read our docs");
    expect(docsButton).toBeInTheDocument();
  });

  it("renders footer links", () => {
    render(<Home />);
    const learnLink = screen.getByText("Learn");
    const examplesLink = screen.getByText("Examples");
    const goToNextjsLink = screen.getByText("Go to nextjs.org →");
    expect(learnLink).toBeInTheDocument();
    expect(examplesLink).toBeInTheDocument();
    expect(goToNextjsLink).toBeInTheDocument();
  });
});
