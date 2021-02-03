import React from "react";
import PropTypes from "prop-types";

const StandarInput = (props)=>{
	const {value,onChange} = props;

	return(
		<input className="input" value={value} type="text" onChange={onChange} data-test="standar_input"/>
	);
}

StandarInput.propTypes = {
	value:PropTypes.string,
	onChange:PropTypes.func
}

const CalculatorInput = (props)=>{
	const {calculatorString,setCalculatorString} = props;

	const directChange = e=>{
		setCalculatorString(e.target.value);
	}

	return(
	<div className="input" data-test="calculator_input">
		<StandarInput onChange={directChange} value={calculatorString}/>
		<span className="result">
			"result"
		</span>
	</div>
	);
}

CalculatorInput.propTypes = {
	calculatorString:PropTypes.string,
	setCalculatorString:PropTypes.func
}

export {
	StandarInput,
	CalculatorInput,
};