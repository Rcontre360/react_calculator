import React from "react";

export const StandarButton = (props)=>{
	const {children,onClick} = props;

	return(
		<button onClick={onClick} className="btn">
			{children}
		</button>
	);
}

export const NumberButton = (props)=>{
	const {str,output} = props;

	return(
		<StandarButton onClick={()=>output(str)} {...props}>
			{str}
		</StandarButton>
	);
}

export const FunctionButton = (props)=>{
	const {str,output} = props;

	return(
		<StandarButton onClick={()=>output(str)} {...props}>
			{str}
		</StandarButton>
	);
}

