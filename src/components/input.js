import React from "react";

const StandarInput = (props)=>{
	//const {value,onChange} = props;

	return(
		<input type="text" />
	);
}

export const CalculatorInput = (props)=>{
	//const {result} = props;

	return(
	<div className="input">
		<StandarInput/>
		<span className="result">
			"result"
		</span>
	</div>
	);
}

