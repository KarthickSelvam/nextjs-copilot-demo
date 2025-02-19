import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders the "Deploy now" button', () => {
    render(<Home />);
    const deployButton = screen.getByRole('button', { name: /Deploy now/i });
    expect(deployButton).toBeInTheDocument();
  });

  it('renders the "Read our docs" button', () => {
    render(<Home />);
    const docsButton = screen.getByRole('button', { name: /Read our docs/i });
    expect(docsButton).toBeInTheDocument();
  });
});
