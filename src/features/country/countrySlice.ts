import { createSlice } from '@reduxjs/toolkit';
import { CountryState } from '@/features/country/countryTypes';
import { getCountry } from '@/features/country/countryThunk';

const countryState: CountryState = {
  list: []
};

export const countrySlice = createSlice({
  name: 'country',
  initialState: countryState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  }
});

export default countrySlice.reducer;
