import { render, screen } from '@testing-library/react';
import Transactions from '../../pages/Transactions';

describe('Transactions component', () => {

  test('rendering transaction page', () => {
    render(<Transactions />);
  });

  test('Checking Title', () => {
    render(<Transactions />);
    const title = screen.getByText('Transactions');
    expect(title).toBeInTheDocument();
  });

});

