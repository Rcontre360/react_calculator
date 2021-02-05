import {evaluate} from "mathjs";
import {operators,numbers} from "./calcButtons";

const withoutRepeatedSymbols = (symbols,str,not=[])=>{
	let res="",count=0;

	for (let i=str.length-1;i>=0;i--){
		let add = str[i];

		let found = symbols.find(op=>op.str===add);
		let except = not.find(op=>op.str===add);

		if (found){
			if (count>0)
				add="";
			if (!except)
				count++;
		} else {
			count=0;
		}
		res = add+res;
	}
	return res;
}

export const parseCalculationString = (str)=>{
	let res = "";
	res = withoutRepeatedSymbols(operators,str,
		[{str:"-"},{str:"("},{str:")"}]);
	return withoutRepeatedSymbols(numbers,res,
		[{str:"1"},{str:"2"},{str:"3"},{str:"4"},{str:"5"},{str:"6"},{str:"7"},{str:"8"},{str:"9"},{str:"0"}]);
}

export const evaluateString = (str)=>{
	let res;
	try {
		res = evaluate(str);
	} catch(err){
		res = false;
	}
	return res;
}

