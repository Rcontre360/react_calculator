import React from "react";
import PropTypes from "prop-types";
import {CalculusButton} from "./buttons";
import {numbers,operators} from "../calculator/calcButtons";
import CalculatorContext from "../calculator/context";

export const CalculatorBody = (props)=>{

	return(
	<div className="buttons_container" data-test="calculator_body">
		<FieldWrapper buttons={numbers} Type={CalculusButton}/>
		<FieldWrapper buttons={operators} Type={CalculusButton}/>
	</div>
	);
}

export const FieldWrapper = (props)=>{
	const {buttons,Type} = props;
	const {setCalculatorString,calculatorString} = ()=>{
		return React.useContext(CalculatorContext);
	}

	const setCalculus = (str)=>{
		setCalculatorString(calculatorString+str);
	}

	return(
		<div className="btn_field" data-test="field_wrapper">
		{
			(buttons.length>0 && Type) 
			&&
			buttons.map((btn,i)=>
				<Type onClick={setCalculus} {...btn} key={i}/>
			)
		}
		</div>
	);
}

FieldWrapper.propTypes = {
	buttons:PropTypes.array,
	Type:PropTypes.any
}