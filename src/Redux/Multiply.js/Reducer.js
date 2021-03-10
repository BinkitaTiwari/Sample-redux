import ActionTypes from '../Multiply.js/Action_Types';

const initialState = {
	val_two: 1
}

const TwoReducer = (state = initialState, action) => {
	switch(action.type){
		case ActionTypes.MULTIPLY_TWO: 
		return {
			...state,
			val_two: state.val_two * 2
		}
		
		default: return state
	}
}

export default TwoReducer;