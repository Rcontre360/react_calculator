import React from "react";
import {findChild,setComponent,checkProps} from "../utils";
import {StandarInput,CalculatorInput} from "../../components/input";

describe("Input elements testing",()=>{

	let component,props;

	describe("Standar Input tests",()=>{

		beforeEach(()=>{	
			props = {
				value:"test value",
				onChange:()=>{}
			};
			component = setComponent(StandarInput,props);
		});

		it("Should have valid props",()=>{
			const response = checkProps(StandarInput,props);
			expect(response).toBeUndefined();
		})

		it("Should render without errors",()=>{
			const wrapper = findChild(component,"standar_input");
			expect(wrapper.exists()).toBe(true);
		});

	});
	
	describe("Calculator input tests",()=>{

		beforeEach(()=>{	
			props = {
				calculatorString:"test value",
				result:"test value",
				setCalculatorString:()=>{}
			};
			component = setComponent(CalculatorInput,props);
		});

		it("Should have valid props",()=>{
			const response = checkProps(StandarInput,props);
			expect(response).toBeUndefined();
		})

		it("Should render without errors",()=>{
			const wrapper = findChild(component,"calculator_input");
			expect(wrapper.exists()).toBe(true);
		});

		describe("Calculator input child components",()=>{

			it("Should render Result component",()=>{
				const wrapper = findChild(component,"result_component");
				expect(wrapper.exists()).toBe(true);
			});

			it("Should render Input component",()=>{
				const wrapper = findChild(component,"calculator_input_component");
				expect(wrapper.exists()).toBe(true);
			});

		});

	});

});