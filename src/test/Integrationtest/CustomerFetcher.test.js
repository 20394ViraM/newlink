import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import CustomerFetcher from '../../fetchApi/CustomerFetcher';

describe('CustomerFetcher', () => {

  test('fetches and sets customer data for Customer', async () => {
    const customersData = [
      { id: 1, name: 'Luna Conner' },
      { id: 2, name: 'Peter Parker' },
    ];

    // Mock the fetch function and return the customersData
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(customersData),
    });

    const setCustomersData = jest.fn();

    render(<CustomerFetcher setCustomersData={setCustomersData} />);

    // Waiting for the fetch to update the data
    await waitFor(() => {
      expect(setCustomersData).toHaveBeenCalledTimes(1);
      expect(setCustomersData).toHaveBeenCalledWith(customersData);
    });

  });
});
