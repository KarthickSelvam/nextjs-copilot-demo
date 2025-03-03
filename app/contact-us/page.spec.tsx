import { render, screen, fireEvent } from '@testing-library/react';
import ContactUs from './page';

describe('ContactUs Page', () => {
  test('renders the form', () => {
    render(<ContactUs />);
    const emailField = screen.getByLabelText(/email/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('email and password fields are required', () => {
    render(<ContactUs />);
    const emailField = screen.getByLabelText(/email/i);
    const passwordField = screen.getByLabelText(/password/i);

    expect(emailField).toBeRequired();
    expect(passwordField).toBeRequired();
  });

  test('submit button is disabled initially', () => {
    render(<ContactUs />);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    expect(submitButton).toBeDisabled();
  });

  test('submit button is enabled when both fields are entered', () => {
    render(<ContactUs />);
    const emailField = screen.getByLabelText(/email/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(emailField, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordField, { target: { value: 'password' } });

    expect(submitButton).toBeEnabled();
  });
});
