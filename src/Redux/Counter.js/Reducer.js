import ActionTypes from './Action_Types';

const initialState={
    count: 0
}

const Reducer=(state= initialState, action)=>{
    console.log("binki");
    switch(action.type){
        case ActionTypes.INCREASE_COUNT:
            return {...state, count: state.count+1};
        case ActionTypes.DECREASE_COUNT:
            return {...state, count: state.count-1};
        default:
            return {...state};
    }

}

export default Reducer;