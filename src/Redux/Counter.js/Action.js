import ActionTypes from '../Counter.js/Action_Types';

export const Increment=()=>{
    console.log("here");
    return{
        type: ActionTypes.INCREASE_COUNT
    }
}
    

export const Decrement=()=>({
    type: ActionTypes.DECREASE_COUNT
})