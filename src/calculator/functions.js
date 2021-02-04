import {operators,symbols} from "./calcButtons";

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
	res = withoutRepeatedSymbols(operators,str,[{str:"-"}]);
	return withoutRepeatedSymbols(symbols,res,[{str:"("},{str:")"}]);
}

