import React from "react";
import {findChild,setComponent,checkProps} from "../utils";
import App from "../../App";

describe("Main app component unit test",()=>{

	let component;

	beforeEach(()=>{	
		component = setComponent(App,{});
		console.log("beforeEach")
	});

	describe("App component rendering and initialization",()=>{

		it("Should render without errors",()=>{
			const wrapper = findChild(component,"app_container");
			expect(wrapper.exists()).toBe(true);
		});

	});

	describe("App methods testing",()=>{



	})

});