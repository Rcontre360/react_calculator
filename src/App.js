import React from "react";
import propTypes from "prop-types";
import styled,{ThemeProvider} from "styled-components";

import {GlobalStyle,darkTheme,Flex} from "./components/styledComponents";
import {CalculatorInput} from "./components/input";
import {CalculatorBody} from "./components/body";
import CalculatorContext from "./calculator/context";
import {parseCalculationString,evaluateString} from "./calculator/functions";

const Container = styled(Flex)`
	background:${props=>props.theme?props.theme.background:"white"};
	color:${props=>props.theme?props.theme.color:"black"};
	justify-content:flex-start;
	height:100vh;
`;

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
		this.setUserAction = this.setUserAction.bind(this);
		this.onKeyPress = this.onKeyPress.bind(this);
	}

	componentDidMount(){
		document.onkeypress = this.onKeyPress;
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

	onKeyPress(e){
		let action = "";
		if (e.key==="Enter" || e.key==="="){
			action = "SHOW_RESULT";
			this.setUserAction({action});
		} else if (e.target.nodeName!=="INPUT"){
			action = "APPEND";
			this.setUserAction({action,str:e.key});
		} 
	}

	setUserAction(btn){
		const {action} = btn;
		let string = this.state.calculatorString;
		let resString=false;

		switch (action) {
			case "APPEND":
				string = string+btn.str;
				break;
			case "SHOW_RESULT":
				resString = evaluateString(this.state.calculatorString);
				if (resString===false)
					resString = "INVALID SYNTAX";
				else{
					string=String(resString);
					this.setPrevResult(resString)
				}
				break;
			case "PREV_RESULT":
				string = string+this.state.prevResult
				break;
			case "DELETE_ALL":
				resString = "0";
			case "DELETE_FORMULA":
				string = "0";
				break;
			case "DELETE_ONE":
				const end = this.state.calculatorString.length-1;
				string = this.state.calculatorString.substring(0,end);
				break;
			default:
				console.log("switch default. Check error",btn);
				break;
		}

		string = parseCalculationString(string);
		this.setCalculatorString(string);
		if (resString!==false)
			this.setResult(String(resString))
	}

	render(){
		return(
		<ThemeProvider theme={darkTheme}>
			<Container 
				className="app" 
				flex="center" 
				direction="column"
				data-test="app_container"
			>
				<GlobalStyle/>
				<CalculatorInput 
					setCalculatorString={this.setCalculatorString}
					{...this.state}
					data-test="calculator_input_component"
				/>
				<CalculatorBody 
					setUserAction={this.setUserAction}
					data-test="calculator_body_component"
				/>
			</Container>
		</ThemeProvider>
		);
	}
}

export default App;