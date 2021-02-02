import React from "react";

const StandarInput = (props)=>{
	const {value,onChange} = props;

	return(
		<input value={value} type="text" onChange={onChange} />
	);
}

export const CalculatorInput = (props)=>{
	const {calculatorString,setCalculatorString} = props;

	const directChange = e=>{
		setCalculatorString(e.target.value);
	}

	return(
	<div className="input">
		<StandarInput onChange={directChange} value={calculatorString}/>
		<span className="result">
			"result"
		</span>
	</div>
	);
}

