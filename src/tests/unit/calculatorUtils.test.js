import {findChild,setComponent,checkProps} from "../utils";
import {withoutRepeatedSymbols,parseCalculationString,evaluateString} from "../../calculator/functions";
import {operators,numbers} from "../../calculator/calcButtons";

describe("Utiliti calculator functions testing",()=>{

	describe("withoutRepeatedSymbols",()=>{
		it("Should eliminate repeated characters",()=>{
			const testValue = "4*/+5/*1(())(";
			const response = withoutRepeatedSymbols(operators,testValue);
			expect(response).toMatch("4+5*1(")
		});

		it("Should leave last repeated character",()=>{
			const testValue = "4***++///5"
			const response = withoutRepeatedSymbols(operators,testValue);
			expect(response).toMatch("4/5");
		});

		it("Should eliminate repeated characters, omitting some",()=>{
			const testValue = "4*-5+/((()))";
			const response = withoutRepeatedSymbols(operators,testValue, [{str:"-"},{str:"("},{str:")"}]);
			expect(response).toMatch("4*-5/((()))");
		})
	});

	describe("parseCalculationString",()=>{
		it("Should output the right value",()=>{
			const testValue = "2*/5+-1*-4.4.,,/*2";
			expect(parseCalculationString(testValue)).toMatch("2/5+-1*-4.4,*2");
		});
	});

	describe("evaluateString",()=>{
		it("Should output the right value",()=>{
			const testValue = "2*sqrt(4)+(9*(3+2))";
			expect(evaluateString(testValue)).toBe(49);
		});
		it("Should output the wrong value",()=>{
			const testValue = "invalid input";
			expect(evaluateString(testValue)).toBe(false);
		});
	});

})