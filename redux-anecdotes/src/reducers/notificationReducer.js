import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const messageSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setMessage(state, action) {
      const message = action.payload;
      return message;
    },
    removeMessage(state) {
      return null;
    }
  }
});

let timerID = null;
export const setNotification = (message, seconds) => {
  return async (dispatch) => {
    dispatch(setMessage(message));
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      dispatch(removeMessage());
    }, seconds * 1000);
  }
}

export const { setMessage, removeMessage } = messageSlice.actions;
export default messageSlice.reducer;