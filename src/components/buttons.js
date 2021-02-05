import React from "react";
import PropTypes from "prop-types";
import styled,{css} from "styled-components";

import {Button} from "./styledComponents";

const CalculatorButton = styled(Button)`
	font-size:120%;
`;

export const StandarButton = (props)=>{
	const {children,onClick,id} = props;

	if (!onClick) 
		onClick = e=>e;

	return(
		<CalculatorButton 
			onClick={onClick} 
			css={props.css} 
			className="btn" 
			data-test="standar_btn" 
			id={id}
		>
			{children}
		</CalculatorButton>
	);
}

StandarButton.propTypes = {
	onClick:PropTypes.func
}

export const ActionButton = (props)=>{
	const {str,btnfunction,action} = props;

	return(
		<StandarButton 
			onClick={()=>btnfunction({action})} 
			{...props}
		>
			{str}
		</StandarButton>
	);
}

ActionButton.propTypes = {
	str:PropTypes.string,
	btnfunction:PropTypes.func,
	action:PropTypes.string
}

export const CalculusButton = (props)=>{
	const {str,btnfunction} = props;

	return(
		<StandarButton 
			onClick={e=>btnfunction({action:"APPEND",str})} 
			{...props}
		>
			{str}
		</StandarButton>
	);
}

CalculusButton.propTypes = {
	str:PropTypes.string,
	btnfunction:PropTypes.func
}

