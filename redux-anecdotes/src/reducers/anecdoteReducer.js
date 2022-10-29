import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addVote(state, action) {
      const id = action.payload;
      const anecdoteToAddVote = state.find((anecdote) => anecdote.id === id);
      const voteAdded = {
        ...anecdoteToAddVote,
        votes: anecdoteToAddVote.votes + 1,
      };
      return state.map((anecdote) => {
        return anecdote.id !== id ? anecdote : voteAdded;
      });
    },
    createAnecdote(state, action) {
      // const anecdote = asObject(action.payload);
      // return [...state, anecdote];
    },
    setAnecdotes(state, action) {
      return action.payload;
    }
  }
});

export const { addVote, createAnecdote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;