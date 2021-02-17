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
	let res = "",pointComa = false, trailZero=true;
	if (!str)
		return "";

	res = withoutRepeatedSymbols(operators,str,
		[{str:"-"},{str:"("},{str:")"}]);
	res =  withoutRepeatedSymbols([{str:"."},{str:","}],res);

	for (let i in res){
		if (res[i]==="0" && trailZero && res.length>1)
			res = res.substring(1,res.length)
		if (res[i]!=="0")
			trailZero = false;
		if (res[i]==="." || res[i]===","){
			if (pointComa){
				res = res.substring(0,i)+res.substring(i+1, res.length);
			}
			pointComa = true;
		}
			
		if (operators.find(el=>el.str===res[i]) || res[i]===" "){
			pointComa = false;
		}
	}

	return res;
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

