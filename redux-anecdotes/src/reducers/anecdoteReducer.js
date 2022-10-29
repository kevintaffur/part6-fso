import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addVote(state, action) {
      const { id, updatedAnecdote } = action.payload;
      return state.map((anecdote) => {
        return anecdote.id !== id ? anecdote : updatedAnecdote;
      });
    },
    appendAnecdote(state, action) {
      return [...state, action.payload];
    },
    setAnecdotes(state, action) {
      return action.payload;
    }
  }
});

export const { addVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.create(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const updateAnecdote = (id, updatedObject) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.update(id, updatedObject);
    dispatch(addVote({ id, updatedAnecdote }));
  }
}

export default anecdoteSlice.reducer;