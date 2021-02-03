import React from "react";
import {findChild,setComponent,checkProps} from "../utils";
import {CalculusButton} from "../../components/buttons";

describe("buttons test",()=>{

	let component,props;

	describe("Standar button tests",()=>{

		beforeEach(()=>{	
			props = {
				str:"test value",
				onClick:()=>{}
			};
			component = setComponent(CalculusButton,props).dive();
		});

		it("Should have valid props",()=>{
			const response = checkProps(CalculusButton,props);
			expect(response).toBeUndefined();
		})

		it("Should render without errors",()=>{
			const wrapper = findChild(component,"standar_btn");
			expect(wrapper.exists()).toBe(true);
		});

	})

});


