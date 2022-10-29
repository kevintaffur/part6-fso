import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import { setMessage, removeMessage } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = [...useSelector(state => state.anecdotes)];
  const filter = useSelector(state => state.filter);
  const filteredAnecdotes = anecdotes.filter((anecdote) => anecdote.content.includes(filter));
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(addVote(id));
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);
    dispatch(setMessage(`you voted ${anecdote.content}`));
    setTimeout(() => {
      dispatch(removeMessage());
    }, 5000);
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
      {filteredAnecdotes.sort(sortByVotes).map(anecdote =>
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