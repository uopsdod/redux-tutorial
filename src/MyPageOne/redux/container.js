import { connect } from 'react-redux'
import { getSth } from './actions'
// import TodoList from '../components/TodoList'
import UIComponent from '../component';

const mapStateToProps = state => {
  console.log("container.js - mapStateToProps() called - state: " , state);    
  return {
    // ...state // this will expose too many information to the client 
    myCount: state.MyPageOneState.count
  }
}

const mapDispatchToProps = dispatch => {
  console.log("container.js - mapDispatchToProps() called");
  return {
    getSth: () => dispatch(getSth()),
    get123: () => dispatch({ type: 'INCREMENT' })
  }
}

const MyUIComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(UIComponent)

export default MyUIComponent