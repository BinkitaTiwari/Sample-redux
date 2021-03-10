import { combineReducers } from 'redux';
import TwoReducer from './Multiply.js/Reducer';
import Reducer from './Counter.js/Reducer';

const rootReducer = combineReducers({
	two: TwoReducer,
	counter: Reducer
})

export default rootReducer;