import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = [...useSelector(state => state.anecdotes)];
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(addVote(id));
  };

  const sortByVotes = (anecdote1, anecdote2) => {
    if (anecdote1.votes > anecdote2.votes) {
      return -1;
    }
    if (anecdote1.votes < anecdote2.votes) {
      return 1;
    }
    return 0;
  };

  return (
    <>
      {anecdotes.sort(sortByVotes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AnecdoteList;