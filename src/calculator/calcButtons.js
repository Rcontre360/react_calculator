import {css} from "styled-components";
import {colors} from "../components/styledComponents";

const styles = {
	numbers:css`background:${colors["backgroundClear"]};`,
	operators:css`background:black;`,
	functions:css`background:${colors["button1"]};`,
	standar:css`background:${colors["button2"]};`
}

const numbers = [
	{str:"1",id:"one"},
	{str:"2",id:"two"},
	{str:"3",id:"three"},
	{str:"4",id:"four"},
	{str:"5",id:"five"},
	{str:"6",id:"six"},
	{str:"7",id:"seven"},
	{str:"8",id:"eight"},
	{str:"9",id:"nine"},
	{str:"0",id:"zero"},
	{str:".",id:"decimal"},
	{str:","},
].map(btn=>{
	btn.css = styles["numbers"];
	return btn;
});

const operators = [
	{str:"+",id:"add"},
	{str:"-",id:"substract"},
	{str:"*",id:"multiply"},
	{str:"/",id:"divide"},
	{str:"^"},
	{str:"%"},
	{str:"("},
	{str:")"}
].map(btn=>{
	btn.css = styles["operators"];
	return btn;
});

const functions = [
	{str:"pow()"},
	{str:"sqrt()"},
	{str:"sin()"},
	{str:"cos()"},
	{str:"tan()"},
	{str:"cot()"},
	{str:"sec()"},
	{str:"csc()"},
].map(btn=>{
	btn.css = styles["functions"];
	return btn;
});

const standar = [
	{str:"=",id:"equals",action:"SHOW_RESULT"},
	{str:"DEL",id:"clear",action:"DELETE_FORMULA"},
	{str:"Zero",action:"DELETE_ALL"},
	{str:"<-",action:"DELETE_ONE"},
	{str:"ANS",action:"PREV_RESULT"}
].map(btn=>{
	btn.css = styles["standar"];
	return btn;
});

export {
	numbers,
	operators,
	functions,
	standar
}

