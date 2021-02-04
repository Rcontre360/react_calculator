import React from "react";
import propTypes from "prop-types";

import {CalculatorInput} from "./components/input";
import {CalculatorBody} from "./components/body";
import CalculatorContext from "./calculator/context";

class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			result:"0",
			calculatorString:"",
			prevResult:"0"
		}
		this.setResult = this.setResult.bind(this);
		this.setCalculatorString = this.setCalculatorString.bind(this);
		this.setPrevResult = this.setPrevResult.bind(this);
	}

	setResult(result){
		this.setState({result});
	}

	setCalculatorString(calculatorString){
		this.setState({calculatorString});
	}

	setPrevResult(prevResult){
		this.setState({prevResult});
	}

	render(){
	return(
		<div className="container">
			<CalculatorInput 
				setCalculatorString={this.setCalculatorString}
				result={this.state.result} 
				{...this.state}
			/>
			<CalculatorBody 
				calculatorString={this.state.calculatorString}
				setCalculatorString={this.setCalculatorString}
				setResult={this.setResult}
				prevResult={this.state.prevResult}
				setPrevResult={this.setPrevResult}
			/>
		</div>
	);
	}
}

export default App;