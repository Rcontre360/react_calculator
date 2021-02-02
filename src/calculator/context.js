import React from "react";

const CalculatorContext = React.createContext({
	calculatorString:"",
	setCalculatorString:e=>e,
});

export default CalculatorContext;