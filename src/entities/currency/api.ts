import * as ENDPOINTS from './endpoints'
import { currencyMock } from './mock';
import { Currency } from './types';


// GET
export const fetchGetCurrency = async (): Promise<Currency[]> => {
    const response = await fetch(ENDPOINTS.GET_CURRENCY_ENDPOINT);
    if (!response.ok) {
      throw new Error('Failed to fetch currency');
    }
  
    // return response.json();
    return currencyMock
};
