import React from "react";
import PropTypes from "prop-types";
import styled,{css} from "styled-components";

import {Input,Flex,Container,BigInput,Result,query} from "./styledComponents";
import {parseCalculationString} from "../calculator/functions";

const StandarInput = (props)=>{

	return(
		<Input 
			type="text" 
			data-test="standar_input" 
			{...props}
		/>
	);
}

const CalculatorInput = (props)=>{
	const {
		calculatorString,
		setCalculatorString,
		result
	} = props;
	const [resultGiven,setResultGiven] = React.useState(true);

	React.useEffect(()=>{
		setResultGiven(true);
		setTimeout(()=>setResultGiven(false),5000);
	},[result]);

	const directChange = e=>{
		setCalculatorString(parseCalculationString(e.target.value));
	}

	return(
	<Container css={css`padding:1em;height:20vh;`} data-test="calculator_input">
		<Container css={
			css`border-radius:10px;background:black;
			justify-content:flex-end;
			align-items = center;`
		}>
			<Result 
				
				active={resultGiven}
				data-test={"result_component"}
				css={
					query("medium",css`font-size:100%;`)
				}
			>
				{result}
			</Result>
			<BigInput as={StandarInput} 
				id="display" 
				css={css`width:80%;
				background:black;
				border:none;
				margin-right:1em;
				color:orange;
				padding:0px;`} 
				onChange={directChange} 
				value={calculatorString}
				data-test={"calculator_input_component"}
			/>
		</Container>
	</Container>
	);
}

CalculatorInput.propTypes = {
	calculatorString:PropTypes.string.isRequired,
	setCalculatorString:PropTypes.func.isRequired,
	result:PropTypes.string.isRequired
}

export {
	StandarInput,
	CalculatorInput,
};