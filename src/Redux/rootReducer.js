import { combineReducers } from 'redux';
import TwoReducer from './Multiply.js/Reducer';
import Reducer from './Counter.js/Reducer';
//import DataReducer from  './reducer/DataReducer'

const rootReducer = combineReducers({
	two: TwoReducer,
	counter: Reducer,
	//data: DataReducer,
})

export default rootReducer;