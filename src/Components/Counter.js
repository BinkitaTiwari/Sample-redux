import React from 'react';
import {connect} from 'react-redux';
import {Increment, Decrement} from '../Redux/Counter.js/Action';

const Counter=(props)=>{

    console.log("count:"+ props.count)
    return(
        <div>
            <h2>Counter:{props.count}</h2>
            <button onClick={()=>props.Increment()}>+</button>
            <button onClick={()=>props.Decrement()}>-</button>
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
        Increment:()=>  dispatch(Increment()),
        Decrement: ()=> dispatch(Decrement())
    }
    

}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
