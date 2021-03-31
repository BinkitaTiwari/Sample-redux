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

export const userData=()=>{
  
  return dispatch=>{
    console.log("user");
    fetch('https://dummyapi.io/data/api/user',{ headers: { 'app-id': '60642f0102904819dc16b926' } })
    .then(res=>res.json())
    .then(res => {
      console.log(typeof(res));
     return res.data.map((user) => {
        console.log(user.email);
        return user;
      })
    })
    .then(userNames => {console.log(userNames)
      dispatch(Decrement())
    })
    .catch(err => console.log('Error:', err))

  }
}