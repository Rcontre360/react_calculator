import React from "react";
import {findChild,setComponent,checkProps} from "../utils";
import App from "../../App";

describe("Main app component unit test",()=>{

	let component;

	beforeEach(()=>{	
		component = setComponent(App,{});
	});

	describe("App component rendering and initialization",()=>{

		it("Should render without errors",()=>{
			const wrapper = findChild(component,"app_container");
			expect(wrapper.exists()).toBe(true);
		});

		it("Should render basic child components",()=>{
			const input = findChild(component,"calculator_input_component");
			expect(input.exists()).toBe(true);
			const body = findChild(component,"calculator_body_component");
			expect(body.exists()).toBe(true);
		});

		it("Should have initial state",()=>{
			const state = {
				result:expect.stringMatching(/[\s\S]*/),
				calculatorString:expect.stringMatching(/[\s\S]*/),
				prevResult:expect.stringMatching(/[\s\S]*/)
			}
			expect(component.state()).toMatchObject(state)
		});

	});

	describe("App methods testing",()=>{

		let instance;
		const testValue = "testValue";

		beforeEach(()=>{
			instance = component.instance();
		});

		it("Should set result",()=>{
			expect(instance.setResult).toBeTruthy();
			instance.setResult(testValue);
			expect(instance.state.result).toBe(testValue);
		});

		it("Should set calculatorString",()=>{
			expect(instance.setCalculatorString).toBeTruthy();
			instance.setCalculatorString(testValue);
			expect(instance.state.calculatorString).toBe(testValue);
		});

		it("Should set result",()=>{
			expect(instance.setPrevResult).toBeTruthy();
			instance.setPrevResult(testValue);
			expect(instance.state.prevResult).toBe(testValue);
		});

		describe("setUserAction method testing",()=>{

			let testFunction,instance;
			beforeEach(()=>{
				instance = component.instance();
				testFunction = instance.setUserAction;
			});

			it("Should append correctly",()=>{
				const parameter = {action:"APPEND",str:"test"};
				testFunction(parameter);
				expect(instance.state.calculatorString).toMatch(/test$/)
			});

			it("Should set prev result correctly",()=>{
				const parameter = {action:"PREV_RESULT"};
				const testValue = "test";
				instance.setPrevResult(testValue);

				testFunction(parameter);
				expect(instance.state.calculatorString).toMatch(/test$/)
			});

		});

	});

});