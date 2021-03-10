import React from 'react';
import Counter from './Components/Counter';
//import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './Redux/store'
import './App.css';
import Multiply from './Components/Multiply';

//const store = createStore(Reducer);

function App() {
  return (
    <Provider store={store}>
      <Counter/>
      <br/>
      <Multiply/>
    </Provider>
    
  );
}

export default App;
