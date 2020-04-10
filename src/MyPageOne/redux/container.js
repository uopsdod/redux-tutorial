import { connect } from 'react-redux'
import { getSth } from './actions'
// import TodoList from '../components/TodoList'
import UIComponent from '../component';

const mapStateToProps = state => {
  console.log("container.js - mapStateToProps() called - state: " , state);    
  return {
    reduxState: state, // this will expose too many information to the client 
    myCount: state.MyPageOneState.count
  }
}

const mapDispatchToProps = dispatch => {
  console.log("container.js - mapDispatchToProps() called");
  return {
      // when you call dispatch( 'your action result data' ), Redux will send the action result to the list of reducers you added at the very beginning. 
      getSth: () => dispatch(getSth())
      // ,get123: () => dispatch({ type: 'INCREMENT' })
  }
}

const MyPageOneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UIComponent)

export default MyPageOneContainer