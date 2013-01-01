import React from "react";
import {findChild,setComponent,checkProps} from "../utils";
import {CalculusButton,ActionButton,StandarButton} from "../../components/buttons";

describe("Buttons test",()=>{

	let component,props;

	describe("Standar button tests",()=>{

		beforeEach(()=>{	
			props = {
				onClick:()=>{}
			};
			component = setComponent(StandarButton,props);
		});

		it("Should have valid props",()=>{
			const response = checkProps(StandarButton,props);
			expect(response).toBeUndefined();
		})

		it("Should render without errors",()=>{
			const wrapper = findChild(component,"standar_btn");
			expect(wrapper.exists()).toBe(true);
		});

	})

	describe("Calculus button tests",()=>{

		beforeEach(()=>{	
			props = {
				str:"test value",
				btnfunction:jest.fn()
			};
			component = setComponent(CalculusButton,props);
		});

		it("Should have valid props",()=>{
			const response = checkProps(CalculusButton,props);
			expect(response).toBeUndefined();
		})

		it("Should render without errors",()=>{
			const wrapper = findChild(component,"calculus_btn");
			expect(wrapper.exists()).toBe(true);
		});

		it("Should call btnfunction when clicked",()=>{
			component.simulate("click");
			expect(component.prop("btnfunction")).toHaveBeenCalled();
		})

	});

	describe("Action button tests",()=>{

		beforeEach(()=>{	
			props = {
				str:"test value",
				action:"test value",
				btnfunction:jest.fn()
			};
			component = setComponent(ActionButton,props);
		});

		it("Should have valid props",()=>{
			const response = checkProps(ActionButton,props);
			expect(response).toBeUndefined();
		})

		it("Should render without errors",()=>{
			const wrapper = findChild(component,"action_btn");
			expect(wrapper.exists()).toBe(true);
		});

		it("Should call btnfunction when clicked",()=>{
			component.simulate("click");
			expect(component.prop("btnfunction")).toHaveBeenCalled();
		})

	})

});


