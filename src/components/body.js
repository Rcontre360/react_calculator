import React from "react";
import PropTypes from "prop-types";
import {CalculusButton,ActionButton} from "./buttons";
import {numbers,operators,standar,symbols} from "../calculator/calcButtons";
import CalculatorContext from "../calculator/context";

export const CalculatorBody = (props)=>{

	return(
	<div className="buttons_container" data-test="calculator_body">
		<FieldWrapper buttons={numbers} Type={CalculusButton}/>
		<FieldWrapper buttons={operators} Type={CalculusButton}/>
		<FieldWrapper buttons={symbols} Type={CalculusButton}/>
		<FieldWrapper buttons={standar} Type={ActionButton}/>
	</div>
	);
}

export const FieldWrapper = (props)=>{
	const {buttons,Type} = props;
	const {setCalculatorString,calculatorString} = React.useContext(CalculatorContext);

	const setUserAction = (btn)=>{
		const {action} = btn;
		console.log(btn)
		switch (action) {
			case "APPEND":
				setCalculatorString(calculatorString+btn.str);
				break;
			case "SHOW_RESULT":
				break;
			case "DELETE_FORMULA":
				break;
			case "DELETE_ALL":
				break;
			case "DELETE_ONE":
				break;
			default:
				break;
		}
			
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