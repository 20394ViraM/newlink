import React from 'react';
import { render, waitFor, screen , fireEvent } from '@testing-library/react';
import RewardFetcher from '../../fetchApi/RewardFetcher';

describe('RewardFetcher', () => {

  test('fetches and sets purchase data for Customer and Transaction', async () => {
    const customersData = [
      { id: 1, name: 'Luna Conner' },
      { id: 2, name: 'Peter Parker' },
    ];

    const transactionsData = [
        { id: 1000, customer_id: 1, purchase_value: 100, month: 'January' },
        { id: 1001, customer_id: 2, purchase_value: 200, month: 'February' },
      ];

    // Mock the fetch function and return the Reward Data
    global.fetch = jest.fn().mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(transactionsData),
      }).mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(customersData),
        });

    const setRewardData = jest.fn();

    render(<RewardFetcher setData={setRewardData} />);

    // Waiting for the fetch to update the data
    await waitFor(() => {
      expect(setRewardData).toHaveBeenCalledTimes(1);
      expect(setRewardData).toHaveBeenCalledWith(
        [
            {
              customer_id: 1,
              customer_name: 'Luna Conner',
              total_transaction: 100,
              rewards_earned: 50,
            },
            {
              customer_id: 2,
              customer_name: 'Peter Parker',
              total_transaction: 200,
              rewards_earned: 250,
            },
          ]
      );
    });


    // Check if the dropdown exists and select a different month
    const dropdown = screen.getByRole('combobox');
    console.log(dropdown)
    fireEvent.change(dropdown, { target: { value: 'February' } });

  });
});
