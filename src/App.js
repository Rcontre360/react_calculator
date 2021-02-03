import React from "react";
import {CalculatorInput} from "./components/input";
import {CalculatorBody} from "./components/body";
import CalculatorContext from "./calculator/context";
import propTypes from "prop-types";

class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			result:"",
			calculatorString:""
		}
		this.setResult = this.setResult.bind(this);
		this.setCalculatorString = this.setCalculatorString.bind(this);
	}

	setResult(result){
		this.setState({result});
	}

	setCalculatorString(calculatorString){
		this.setState({calculatorString});
	}

	render(){
	return(
		<div className="container">
			<CalculatorInput setCalculatorString={this.setCalculatorString}{...this.state}/>
			<CalculatorContext.Provider value={{
				calculatorString:this.state.calculatorString,
				setCalculatorString:this.setCalculatorString
			}}>
				<CalculatorBody />
			</CalculatorContext.Provider>
		</div>
	);
	}
}

export default App;