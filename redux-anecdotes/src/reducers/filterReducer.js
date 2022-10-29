import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateText(state, action) {
      const newSearch = action.payload;
      return newSearch;
    }
  }
});

export const { updateText } = filterSlice.actions;
export default filterSlice.reducer;