import axios from '@/utils/axios';
import { Country } from '@/features/country/countryTypes';

export const getCountryApi = async () => {
  const response = await axios.get<Country[]>('/api/country');
  return response.data;
};
