import React from "react";
import {findChild,setComponent,checkProps} from "../utils";
import {CalculatorBody,FieldWrapper} from "../../components/body";

describe("Body elements testing",()=>{

	let component,props;

	describe("Field Wrapper tests",()=>{

		beforeEach(()=>{	
			props = {
				buttons:[],
				setUserAction:()=>{},
				Type:<div></div>
			};
			component = setComponent(FieldWrapper,props);
		});

		it("Should have valid props",()=>{
			const response = checkProps(FieldWrapper,props);
			expect(response).toBeUndefined();
		})

		it("Should render without errors",()=>{
			const wrapper = findChild(component,"field_wrapper");
			expect(wrapper.exists()).toBe(true);
		});

	});
	
	describe("Calculator body input tests",()=>{

		beforeEach(()=>{	
			props={
				setUserAction:()=>{}
			};
			component = setComponent(CalculatorBody,props);
		});

		it("Should have valid props",()=>{
			const response = checkProps(CalculatorBody,props);
			expect(response).toBeUndefined();
		})

		it("Should render without errors",()=>{
			const wrapper = findChild(component,"calculator_body");
			expect(wrapper.exists()).toBe(true);
		});

		it("Sould render child fields",()=>{
			expect(component.find(FieldWrapper).exists()).toBe(true);
		});

	});

});