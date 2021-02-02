import React from "react";
import {NumberButton,FunctionButton} from "./buttons";
import {numbers,operators} from "../calculator/calcButtons";
import CalculatorContext from "../calculator/context";

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
	const {setCalculatorString,calculatorString} = React.useContext(CalculatorContext);

	const setCalculus = (str)=>{
		setCalculatorString(calculatorString+str);
	}

	return(
		<div className="btn_field">
		{
			buttons.map((btn,i)=>
				<Type output={setCalculus} {...btn} key={i}/>
			)
		}
		</div>
	);
}