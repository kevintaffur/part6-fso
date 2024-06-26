import { useDispatch, useSelector } from "react-redux";
import { updateAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = [...useSelector(state => state.anecdotes)];
  const filter = useSelector(state => state.filter);
  const filteredAnecdotes = anecdotes.filter((anecdote) => anecdote.content.includes(filter));
  const dispatch = useDispatch();

  const vote = (id) => {
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };
    dispatch(updateAnecdote(id, updatedAnecdote));
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5));
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