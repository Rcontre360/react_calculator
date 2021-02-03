import React from "react";
import PropTypes from "prop-types";

export const StandarButton = (props)=>{
	const {children,onClick} = props;

	if (!onClick) onClick = e=>e;

	return(
		<button onClick={onClick} className="btn" data-test="standar_btn">
			{children}
		</button>
	);
}

export const CalculusButton = (props)=>{
	const {str,onClick} = props;

	return(
		<StandarButton onClick={()=>output(str)} {...props}>
			{str}
		</StandarButton>
	);
}

