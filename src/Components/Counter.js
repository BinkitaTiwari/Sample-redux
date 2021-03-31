import React from 'react';
import {connect} from 'react-redux';
import { Decrement, incrementAsync,userData} from '../Redux/Counter.js/Action';

const Counter=(props)=>{
   // props.user()
    console.log("count:"+ props.count)
    return(
        <div>
            <h2>Counter:{props.count}</h2>
            <button onClick={()=>props.incrementAsync()}>+</button>
            <button onClick={()=>props.Decrement()}>-</button>
            <button onClick={()=>props.user()}>Fetch data</button>
        
        </div>
    )
}

const mapStateToProps =(state)=>{
    return {
        count: state.counter.count
    }
}
 
const mapDispatchToProps = (dispatch)=>{
    return {
        incrementAsync:()=>  dispatch(incrementAsync()),
        Decrement: ()=> dispatch(Decrement()),
        user:()=>dispatch(userData())
    }
    

}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
