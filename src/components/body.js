import React from "react";
import {NumberButton,FunctionButton} from "./buttons";
import {numbers,operators} from "../calculator/calcButtons";

export const CalculatorBody = (props)=>{

	return(
	<div className="buttons_container">
		<FieldWrapper buttons={numbers} Type={NumberButton}/>
		<FieldWrapper buttons={operators} Type={FunctionButton}/>
	</div>
	);
}

const FieldWrapper = (props)=>{
	const {buttons,Type} = props;

	return(
		<div className="btn_field">
		{
			buttons.map((btn,i)=><Type {...btn} key={i}/>)
		}
		</div>
	);
}