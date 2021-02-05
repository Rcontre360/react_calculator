import React from "react";
import PropTypes from "prop-types";
import styled, {css} from "styled-components";

import {CalculusButton,ActionButton} from "./buttons";
import {numbers,operators,standar,functions} from "../calculator/calcButtons";
import CalculatorContext from "../calculator/context";
import {Container,Grid,colors,query} from "./styledComponents";

export const CalculatorBody = (props)=>{
	const {setUserAction} = props;

	const fieldButtons = [
	{buttons:numbers, Type:CalculusButton},

	{buttons:operators, Type:CalculusButton},

	{buttons:functions, Type:CalculusButton,
	css:query("medium",css`
		display:none;
		background:green;
	`)},

	{buttons:standar, Type:ActionButton,
	css:`
		${query("small",css`grid-column:1/3;`)}
		${query("tiny",css`grid-column:1/2;`)}
	`},
	]

	return(
	<Grid 
		column={"repeat(auto-fit,minmax(150px,1fr))"} 
		row={"repeat(auto-fill,1fr)"} 
		data-test="calculator_body"
		css={
			css`
			background:${colors["backgroundDark"]};
			width:100vw;
			height:80vh;`
		}
	>
	{
		fieldButtons.length>0 
		&&
		fieldButtons.map((field,id)=>
	 		<FieldWrapper 
				key={id} 
				setUserAction={setUserAction} 
				{...field}
			/>
		)
	}
	</Grid>
	);
}

export const FieldWrapper = (props)=>{
	const {buttons,Type,setUserAction} = props;

	return(
		<Grid 
			css={props.css}
			column={"repeat(3,1fr)"} 
			row={"repeat(auto-fill,1fr)"} 
			data-test="field_wrapper" 
		>
		{
			(buttons.length>0 && Type) 
			&&
			buttons.map((btn,i)=>
				<Type 
					btnfunction={setUserAction} 
					{...btn} 
					key={i}
				>
					{btn.str}
				</Type>
			)
		}
		</Grid>
	);
}

FieldWrapper.propTypes = {
	buttons:PropTypes.array,
	Type:PropTypes.any,
	setUserAction:PropTypes.func
}