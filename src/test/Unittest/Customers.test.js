import { render, screen } from '@testing-library/react';
import Customers from '../../pages/Customers';

describe('Customers component', () => {

  test('renders customer page', () => {
    render(<Customers />);
  });

  test('checking title', () => {
    render(<Customers />);
    const title = screen.getByText('Customers');
    expect(title).toBeInTheDocument();
  });

  test('displaying "No Customers found" message when no customers are available', () => {
    render(<Customers />);
    const noCustomerstext = screen.getByText('No Customers found');
    expect(noCustomerstext).toBeInTheDocument();
  });


});
