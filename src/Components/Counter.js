import React from 'react';
import {connect} from 'react-redux';
import { Decrement, incrementAsync} from '../Redux/Counter.js/Action';

const Counter=(props)=>{

    console.log("count:"+ props.count)
    return(
        <div>
            <h2>Counter:{props.count}</h2>
            <button onClick={()=>props.incrementAsync()}>+</button>
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
        incrementAsync:()=>  dispatch(incrementAsync()),
        Decrement: ()=> dispatch(Decrement())
    }
    

}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
