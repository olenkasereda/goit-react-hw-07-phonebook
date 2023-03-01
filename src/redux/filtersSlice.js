import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onChangeFilter(state, action) {
      return action.payload;
    },
  },
});

export const { onChangeFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
