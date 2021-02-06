import {evaluate} from "mathjs";
import {operators,numbers} from "./calcButtons";

export const withoutRepeatedSymbols = (symbols,str,not=[])=>{
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
	if (!str)
		return "";
	res = withoutRepeatedSymbols(operators,str,
		[{str:"-"},{str:"("},{str:")"}]);
	return withoutRepeatedSymbols([{str:"."},{str:","}],res);
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

