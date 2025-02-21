import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import '@testing-library/jest-dom/extend-expect';

describe("BookingForm", () => {

  test("validates first name field correctly", () => {
    render(<BookingForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    
    fireEvent.blur(firstNameInput);
    expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
    
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.blur(firstNameInput);
    expect(screen.queryByText(/first name is required/i)).not.toBeInTheDocument();
  });

  test("validates last name field correctly", () => {
    render(<BookingForm />);

    const lastNameInput = screen.getByLabelText(/last name/i);
    
    fireEvent.blur(lastNameInput);
    expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
    
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.blur(lastNameInput);
    expect(screen.queryByText(/last name is required/i)).not.toBeInTheDocument();
  });

  test("validates email field correctly", () => {
    render(<BookingForm />);

    const emailInput = screen.getByLabelText(/email address/i);
    
    fireEvent.change(emailInput, { target: { value: "invalidEmail" } });
    fireEvent.blur(emailInput);
    expect(screen.getByText(/enter a valid email address/i)).toBeInTheDocument();
    
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.blur(emailInput);
    expect(screen.queryByText(/enter a valid email address/i)).not.toBeInTheDocument();
  });

  test("validates phone field correctly", () => {
    render(<BookingForm />);

    const phoneInput = screen.getByLabelText(/phone number/i);
    
    fireEvent.change(phoneInput, { target: { value: "12345" } });
    fireEvent.blur(phoneInput);
    expect(screen.getByText(/enter a valid 10-digit phone number/i)).toBeInTheDocument();
    
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    fireEvent.blur(phoneInput);
    expect(screen.queryByText(/enter a valid 10-digit phone number/i)).not.toBeInTheDocument();
  });

  test("checks if form is valid when all fields are correctly filled", () => {
    render(<BookingForm />);

    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: "Doe" } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: "john.doe@example.com" } });
    fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: "1234567890" } });

    expect(screen.getByRole("button", { name: /submit/i })).toBeEnabled();
  });

  test("checks if form is invalid when fields are empty", () => {
    render(<BookingForm />);

    expect(screen.getByRole("button", { name: /submit/i })).toBeDisabled();
  });
});
