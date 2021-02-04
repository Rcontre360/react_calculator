import React from "react";
import PropTypes from "prop-types";

import {CalculusButton,ActionButton} from "./buttons";
import {numbers,operators,standar,symbols,functions} from "../calculator/calcButtons";
import CalculatorContext from "../calculator/context";
import {parseCalculationString,evaluateString} from "../calculator/functions";

export const CalculatorBody = (props)=>{

	const {
		setCalculatorString,
		calculatorString,
		setResult,
		prevResult,
		setPrevResult
	} = props

	const setUserAction = (btn)=>{
		const {action} = btn;
		let string = calculatorString;
		let resString=false;

		switch (action) {
			case "APPEND":
				string = string+btn.str;
				break;
			case "SHOW_RESULT":
				resString = evaluateString(calculatorString);
				if (resString===false)
					resString = "INVALID SYNTAX";
				else{
					string=String(resString);
					setPrevResult(resString)
				}
				break;
			case "PREV_RESULT":
				string = string+prevResult
				break;
			case "DELETE_ALL":
				resString = "0";
				string="";
				break;
			case "DELETE_FORMULA":
				string = "";
				break;
			case "DELETE_ONE":
				const end = calculatorString.length-1;
				string = calculatorString.substring(0,end);
				break;
			default:
				console.log("switch default. Check error",btn);
				break;
		}
		console.log(string,resString)

		string = parseCalculationString(string);
		setCalculatorString(string);
		if (resString!==false)
			setResult(String(resString))
	}

	const fieldButtons = [
	{buttons:numbers, Type:CalculusButton},
	{buttons:operators, Type:CalculusButton},
	{buttons:functions, Type:CalculusButton},
	{buttons:symbols, Type:CalculusButton},
	{buttons:standar, Type:ActionButton},
	]

	return(
	<div className="buttons_container" data-test="calculator_body">
	{
		fieldButtons.map((field,id)=>{
			return <FieldWrapper key={id} setUserAction={setUserAction.bind(this)} {...field}/>
		})
	}
	</div>
	);
}

export const FieldWrapper = (props)=>{
	const {buttons,Type,setUserAction} = props;

	return(
		<div className="btn_field" data-test="field_wrapper">
		{
			(buttons.length>0 && Type) 
			&&
			buttons.map((btn,i)=>
				<Type btnfunction={setUserAction} {...btn} key={i}>
					{btn.str}
				</Type>
			)
		}
		</div>
	);
}

FieldWrapper.propTypes = {
	buttons:PropTypes.array,
	Type:PropTypes.any
}