import React from "react";
import {render,configure} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {findChild,setComponent,checkProps} from "../utils";
import App from "../../App";

describe("Calculator valid user actions",()=>{

	configure({testIdAttribute: 'data-test'})

	let getByTestId,getByText,container;
	const testValue = "49*2+2",testValueResult = "100";

	beforeEach(()=>{
		const response = render(<App/>);
		getByTestId = response.getByTestId;
		getByText = response.getByText;
	});

	it("Should append when typing calculator input",()=>{
		const calculatorInput = getByTestId("calculator_input_component");
		userEvent.type(calculatorInput,testValue);
		expect(calculatorInput.value).toMatch(testValue);
	});

	describe("Action buttons",()=>{

		let calculatorInput;
		const getButton = (str)=>{
			return getByText(str).closest("button");
		}

		beforeEach(()=>{
			calculatorInput = getByTestId("calculator_input_component");
		});

		it("Should append when pressing calculator buttons",()=>{
			const numberBtn = getButton("1");
			const operatorBtn = getButton("+");
			const functionBtn = getButton("sin()");
			userEvent.click(numberBtn);
			userEvent.click(operatorBtn);
			userEvent.click(functionBtn);
			expect(calculatorInput.value).toMatch("1+sin()");
		})

		it("Should delete characters when pressing button",()=>{
			const deleteBtn = getButton("<-");
			const testLength =  testValue.length-1;
			userEvent.type(calculatorInput,testValue);
			userEvent.click(deleteBtn);
			expect(calculatorInput.value).toMatch(testValue.substring(0,testLength));
		});

		it("Should delete all input formula when pressing button",()=>{
			const deleteAllbtn = getButton("DEL");
			userEvent.type(calculatorInput,testValue);
			userEvent.click(deleteAllbtn);
			expect(calculatorInput.value).toMatch("");
		});

		it("Should delete input formula and result",()=>{
			const deleteResultBtn = getButton("Zero");
			const resultBtn = getButton("=");
			const resultElement = getByTestId("calculator_input_component");
			userEvent.type(calculatorInput,testValue);
			userEvent.click(resultBtn);

			userEvent.type(calculatorInput,testValue);
			userEvent.click(deleteResultBtn);
			expect(calculatorInput.value).toMatch("");
			// check inner text
		})

		it("Should show previous result when pressing button",()=>{
			const resultBtn = getButton("=");
			const prevAnsBtn = getButton("ANS");
			const deleteAllbtn = getButton("DEL");
			userEvent.type(calculatorInput,testValue);
			userEvent.click(resultBtn);
			userEvent.click(prevAnsBtn);
			expect(calculatorInput.value).toMatch(testValueResult);
		});

		it("Should show result when pressing button",()=>{
			const resultBtn = getButton("=");
			userEvent.type(calculatorInput,testValue);
			userEvent.click(resultBtn);
			expect(getByText(testValueResult).closest('span')).toBeTruthy();
			expect(calculatorInput.value).toMatch(testValueResult);
		});
	});

});

