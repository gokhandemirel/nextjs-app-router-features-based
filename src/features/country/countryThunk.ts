import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCountryApi } from '@/features/country/countryService';
import { Country } from './countryTypes';

export const getCountry = createAsyncThunk<Country[]>('country/getCountry', async () => {
  const response = await getCountryApi();
  return response;
});
