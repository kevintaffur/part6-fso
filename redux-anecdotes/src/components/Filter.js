import { connect } from "react-redux";
import { updateText } from "../reducers/filterReducer";

const Filter = (props) => {
  const handleChange = (event) => {
    const value = event.target.value;
    props.updateText(value);
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input
        onChange={handleChange}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateText: (value) => {
      dispatch(updateText(value));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Filter);