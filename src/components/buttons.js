import React from "react";

export const StandarButton = (props)=>{
	const {children} = props;

	return(
		<button className="btn">
			{children}
		</button>
	);
}

export const NumberButton = (props)=>{
	const {str} = props;

	return(
		<StandarButton {...props}>
			{str}
		</StandarButton>
	);
}

export const FunctionButton = (props)=>{
	const {str} = props;

	return(
		<StandarButton {...props}>
			{str}
		</StandarButton>
	);
}

