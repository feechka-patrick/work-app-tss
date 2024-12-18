import * as ENDPOINTS from './endpoints'
import { citiesMock } from './mock';
import { City, CityCreate, CityDeleted, CityPosted } from './types';

// GET
export const fetchGetCity = async (): Promise<City[]> => {
    const response = await fetch(ENDPOINTS.GET_CITY_ENDPOINT);
    if (!response.ok) {
      throw new Error('Failed to fetch cities');
    }
  
    // return response.json();
    return citiesMock
};

// POST
export const fetchPostCity = async (newCity: CityCreate): Promise<CityPosted> => {
    const response = await fetch(ENDPOINTS.POST_CITY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCity),
    });
  
    if (!response.ok) {
      throw new Error('Failed to create city');
    }
  
    return response.json();
  };
  
// DELETE
//? soft or hard
export const fetchDeleteCity = async (city_code: string): Promise<CityDeleted> => {
    const response = await fetch(ENDPOINTS.DELETE_CITY_ENDPOINT, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({city_code: city_code}),
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete city');
    }

    return response.json();
};
  
