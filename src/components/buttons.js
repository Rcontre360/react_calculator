import React from "react";
import PropTypes from "prop-types";

export const StandarButton = (props)=>{
	const {children,onClick} = props;

	if (!onClick) 
		onClick = e=>e;

	return(
		<button onClick={onClick} className="btn" data-test="standar_btn" {...props}>
			{children}
		</button>
	);
}

export const ActionButton = (props)=>{
	const {str,btnfunction,action} = props;

	return(
		<StandarButton onClick={()=>btnfunction({action})} {...props}>
			{str}
		</StandarButton>
	);
}

export const CalculusButton = (props)=>{
	const {str,btnfunction} = props;

	return(
		<StandarButton onClick={e=>btnfunction({action:"APPEND",str})} {...props}>
			{str}
		</StandarButton>
	);
}

