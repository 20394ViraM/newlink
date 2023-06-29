import { render, screen } from '@testing-library/react';
import Rewards from '../../pages/Rewards';

describe('Rewards component', () => {

  test('rendering transaction page', () => {
    render(<Rewards />);
  });

  test('Checking Title', () => {
    render(<Rewards />);
    const title = screen.getByText('Reward Points');
    expect(title).toBeInTheDocument();
  });

});

