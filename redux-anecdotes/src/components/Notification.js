import { connect } from "react-redux"

const Notification = (props) => {
  const style = props.notification === null
    ? {
      display: 'none'
    } : {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { notification: state.notification };
};

export default connect(mapStateToProps)(Notification);