import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText('Checkout Form');
    expect(header).toBeInTheDocument();
    // expect(header).not.toBeInTheDocument();
});


test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    const checkoutButton = screen.getByRole('button', { name: 'Checkout' });

    fireEvent.click(checkoutButton);

    const successmsg = await screen.findByTestId('successMessage');

    expect(successmsg).toBeInTheDocument();
    // expect(successmsg).not.toBeInTheDocument();
});

