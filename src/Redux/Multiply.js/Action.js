import ActionTypes from '../Multiply.js/Action_Types';

export const multiplyTwo = () => {
	/*return {
		type: ActionTypes.MULTIPLY_TWO
	}*/
	
	return dispatch => {
		return setTimeout(() => {
			dispatch({
			  type: ActionTypes.MULTIPLY_TWO
			})
		  }, 3000)
	}
}