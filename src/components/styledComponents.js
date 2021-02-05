import styled,{createGlobalStyle,css} from "styled-components";

export const colors = {
	background:"#222858",
	backgroundClear:"#838ABD",
	backgroundDark:"#161616",
	button1:"#6E0101",
	button2:"#679292",
	textClear:"#E0E0E0",
	textDark:"#323338",
}

export const sizes = {
	tiny:"300px",
	small:"450px",
	medium:"700px",
	big:"900px",
	huge:"1200px"
}

export const darkTheme = {
	background:colors["backgroundDark"],
	color:colors["textClear"]
}

export const clearTheme = {
	background:colors["backgroundClear"],
	color:colors["textDark"]
}

export const devise = {
	tiny:`(max-width: ${sizes["tiny"]})`,
	small:`(max-width: ${sizes["small"]})`,
	medium:`(max-width: ${sizes["medium"]})`,
	big:`(max-width: ${sizes["big"]})`,
	huge:`(max-width: ${sizes["huge"]})`
}

export const query = (size,styles)=>{
	return `@media ${devise[size]}{
		${styles}
	}`
}

const stylesFunction = props=>props.css;

export const GlobalStyle = createGlobalStyle`
	*{
		margin:0;
		padding:0;
		box-sizing:border-box;
	}
	body{
		background:black;
	}
`;

export const Result = styled.span`
	font-size:200%;
	margin:10%;
	color:grey;
	transition:1s;
	${props=>props.active && css`
		transform:scale(1.5);
		color:white;
		transition:1s;
	`}
	${stylesFunction}
`;

export const Input = styled.input`
	outline:none;
	background:${colors["backgroundDark"]};
	color:${colors["textClear"]};
	padding:${"1em"};
	border:${`solid ${colors["textClear"]} 3px`};
	border-radius:10px;
	${stylesFunction}
`;

export const BigInput = styled(Input)`
	width:"100%";
	font-size:200%;
	text-align:right;
	height:"100%";
	${query("small",css`font-size:130%;`)}
	${stylesFunction}
`;

export const Button = styled.button`
	padding:"1em";
	background:${colors["backgroundClear"]};
	color:${colors["textClear"]};
	border:solid ${colors["backgroundDark"]} 3px;
	border-radius:10px;
	outline:none;
	&:hover{
		background:#4E4A4A;
	}
	${stylesFunction}
`;

export const Flex = styled.div`
	display:flex;
	flex-direction:${props=>props.direction?props.direction:"center"};
	${props=>{
		const dir = props.flex?props.flex:"center";
		return`
			align-items:${dir};
			justify-content:${dir};
			align-content:${dir};
		`
	}}
	width:${props=>props.width?props.width:"100%"};
	height:${props=>props.height?props.height:"100%"};
	${stylesFunction}
`;

export const Grid = styled.div`
	${stylesFunction}
	display:grid;
	${props=>`
		grid-template-columns:${props.column?props.column:"1 1fr"};
		grid-template-rows:${props.row?props.row:"1 1fr"};
	`}
	${props=>{
		let val = ``;
		for (let i in props.gap)
			val = val+`grid-${i}-gap:${props.gap[i]};`;
		return val;
	}}
`;

export const Container = styled(Flex)`
	background:${colors["background"]};
	color:${colors["textClear"]};
	${stylesFunction};
`;