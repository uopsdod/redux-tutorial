# How to run this project

npm install

npm start

# How Redux works in this project

## How Redux sets up itself in a React project: 

1. Create the Redux Store

1-1. add the reducers you need: 

```javascript
  import { createStore, combineReducers } from 'redux'
  const store = createStore(combineReducers({ MyPageOneState : MyPageOneReducer}))
```

1-2. Allow your App component to access the newly-created Redux Store
```javascript
  render(
      // Allow your App component to use Redux Store
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
  )
```

2. Include the your Redux Comtainer in the entry App component
```javascript
  import MyPageOneContainer from './MyPageOne/redux/container';
  function App() {
    return (
      <div className="App">
        <MyPageOneContainer/>
      </div>
    );
}
```

3. How to connect different moduls in a Redux Container 

3-1. decide how to map the state returned from reducers to your UI component
```javascript
  const mapStateToProps = state => {
    return {
      reduxState: state, 
      myCount: state.MyPageOneState.count
    }
  }
```

3-2. decide how to map the functions to dispatched functions 
```javascript
  const mapDispatchToProps = dispatch => {
    return {
        getSth: () => dispatch(getSth())
    }
  }
```


3-3. connect what you did in 3-1 and 3-2 with your UI component, so that you can access the Reudx data and function in the UI
```javascript
  const MyPageOneContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(UIComponent)
```



