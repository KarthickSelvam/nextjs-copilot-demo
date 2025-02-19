import { render } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it('should render the "Deploy now" button', () => {
    const { getByText } = render(<Home />);
    const deployButton = getByText("Deploy now");
    expect(deployButton).toBeInTheDocument();
  });

  it('should render the "Read our docs" button', () => {
    const { getByText } = render(<Home />);
    const docsButton = getByText("Read our docs");
    expect(docsButton).toBeInTheDocument();
  });
});
