import { createSlice } from "@reduxjs/toolkit";

const initialState = 'just to test...';

const messageSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    changeMessage(state, action) {
      const message = action.payload;
      return message;
    }
  }
});

export const { changeMessage } = messageSlice.actions;
export default messageSlice.reducer;