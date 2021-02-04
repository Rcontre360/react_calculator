
export const numbers = [
	{str:"1",id:"one"},
	{str:"2",id:"two"},
	{str:"3",id:"three"},
	{str:"4",id:"four"},
	{str:"5",id:"five"},
	{str:"6",id:"six"},
	{str:"7",id:"seven"},
	{str:"8",id:"eight"},
	{str:"9",id:"nine"},
	{str:"0",id:"zero"}
]

export const operators = [
	{str:"+",id:"add"},
	{str:"-",id:"substract"},
	{str:"*",id:"multiply"},
	{str:"/",id:"divide"},
	{str:"^"},
	{str:"%"},
]

export const functions = [
	{str:"pow()"},
	{str:"sqrt()"},
	{str:"sin()"},
	{str:"cos()"},
	{str:"tan()"},
	{str:"cot()"},
	{str:"sec()"},
	{str:"csc()"},
]

export const symbols = [
	{str:".",id:"decimal"},
	{str:","},
	{str:"("},
	{str:")"}
]

export const standar = [
	{str:"=",id:"equals",action:"SHOW_RESULT"},
	{str:"DEL",id:"clear",action:"DELETE_FORMULA"},
	{str:"Zero",action:"DELETE_ALL"},
	{str:"<-",action:"DELETE_ONE"},
	{str:"ANS",action:"PREV_RESULT"}
]



