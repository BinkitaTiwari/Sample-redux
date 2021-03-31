import React from 'react';
import { connect } from 'react-redux';
import { multiplyTwo } from '../Redux/Multiply.js/Action';

function Multiply(props){
	return (
		<div>
			<h1>{props.val_two}</h1>
			<h3>Click the button to multiply the above number by 2</h3>
			<button onClick={props.multiplyTwo}>Multiply by 2</button>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		val_two: state.two.val_two
	}
}


const mapDispatchToProps = dispatch => {
	return {
		multiplyTwo: () => dispatch(multiplyTwo())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Multiply);