import React from "react";
import {CalculatorInput} from "./components/input";
import {CalculatorBody} from "./components/body";

class App extends React.Component{

	render(){
	return(
		<div className="container">
			<CalculatorInput/>
			<CalculatorBody/>
		</div>
	);
	}
}

export default App;