import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import TransactionFetcher from '../../fetchApi/TransactionFetcher';

describe('TransactionFetcher', () => {

  test('fetches and sets purchase data for Customer and Transaction', async () => {
    const customersData = [
      { id: 1, name: 'Luna Conner' },
      { id: 2, name: 'Peter Parker' },
    ];

    const transactionsData = [
        { id: 1000, customer_id: 1, purchase_value: 100, month: 'January' },
        { id: 1001, customer_id: 2, purchase_value: 200, month: 'February' },
      ];

    // Mock the fetch function and return the Transaction Data
    global.fetch = jest.fn().mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(transactionsData),
      }).mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(customersData),
        });

    const setPurchaseData = jest.fn();

    render(<TransactionFetcher setPurchaseData={setPurchaseData} />);

    // Waiting for the fetch to update the data
    await waitFor(() => {
      expect(setPurchaseData).toHaveBeenCalledTimes(1);
      expect(setPurchaseData).toHaveBeenCalledWith(
        [
            {
              id: 1000,
              name: 'Luna Conner',
              purchase_value: 100,
              month: 'January',
            },
            {
              id: 1001,
              name: 'Peter Parker',
              purchase_value: 200,
              month: 'February',
            },
          ]
      );
    });

  });
});
