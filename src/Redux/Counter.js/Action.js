import ActionTypes from '../Counter.js/Action_Types';

 const Increment=()=>{
    console.log("here");
    return{
        type: ActionTypes.INCREASE_COUNT
    }
}
    
export const incrementAsync=()=> {
    return dispatch => {
      setTimeout(() => {
        // You can invoke sync or async actions with `dispatch`
        dispatch(Increment());
      }, 1000);
    };
  }

export const Decrement=()=>({
    type: ActionTypes.DECREASE_COUNT
})