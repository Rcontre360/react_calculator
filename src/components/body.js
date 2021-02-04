import React from "react";
import PropTypes from "prop-types";
import {evaluate} from "mathjs";

import {CalculusButton,ActionButton} from "./buttons";
import {numbers,operators,standar,symbols,functions} from "../calculator/calcButtons";
import CalculatorContext from "../calculator/context";
import {parseCalculationString} from "../calculator/functions";

export const CalculatorBody = (props)=>{

	return(
	<div className="buttons_container" data-test="calculator_body">
		<FieldWrapper buttons={numbers} Type={CalculusButton}/>
		<FieldWrapper buttons={operators} Type={CalculusButton}/>
		<FieldWrapper buttons={functions} Type={CalculusButton}/>
		<FieldWrapper buttons={symbols} Type={CalculusButton}/>
		<FieldWrapper buttons={standar} Type={ActionButton}/>
	</div>
	);
}

const evaluateString = (str)=>{
	let res;
	try {
		res = evaluate(str);
	} catch(err){
		res = false;
	}
	return res;
}

export const FieldWrapper = (props)=>{
	const {buttons,Type} = props;
	const {
		setCalculatorString,
		calculatorString,
		setResult,
		prevResult,
		setPrevResult
	} = React.useContext(CalculatorContext);

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

		string = parseCalculationString(string);
		setCalculatorString(string);
		if (resString!==false)
			setResult(String(resString))
	}

	return(
		<div className="btn_field" data-test="field_wrapper">
		{
			(buttons.length>0 && Type) 
			&&
			buttons.map((btn,i)=>
				<Type btnfunction={setUserAction.bind(this)} {...btn} key={i}>
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