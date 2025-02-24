import { render, screen, fireEvent } from '@testing-library/react';
import ContactUsPage from './page';

describe('ContactUsPage', () => {
  test('renders form in the center of the screen', () => {
    render(<ContactUsPage />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
    expect(form).toHaveClass('contact-us-form');
  });

  test('email and password fields are required', () => {
    render(<ContactUsPage />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    expect(emailInput).toBeRequired();
    expect(passwordInput).toBeRequired();
  });

  test('submit button is active only when both fields are entered', () => {
    render(<ContactUsPage />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    expect(submitButton).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(submitButton).toBeDisabled();

    fireEvent.change(passwordInput, { target: { value: 'password' } });
    expect(submitButton).toBeEnabled();
  });
});
