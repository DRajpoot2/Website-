var display = 0;

var operandArray = [0,1,2,3,4,5,6,7,8,9];
var operatorArray = ["*","/","+","-"];

var operator_='';
var saveValue = '';

function displayMe(obj){
	let display = window.document.frmsimplecalculator.txtDisplay;

if(display.value != 0 && saveValue ==''){
	 display.value = display.value + obj.value;
} else {
	display.value = obj.value;
}
}
function cancel_(){
	window.document.frmsimplecalculator.txtDisplay.value = 0
	operator_='';
	saveValue = '';
}

function checkOperator(obj){
	let display = window.document.frmsimplecalculator.txtDisplay;
	
	if(operatorArray.includes(obj.value)){
		operator_= obj.value;
		saveValue = display.value;
	}
}

function solve(){
	let display = window.document.frmsimplecalculator.txtDisplay;
	
	if(operator_ == '+'){
		display.value = parseInt(saveValue) + parseInt(display.value);
	} else if(operator_ == '-'){
		display.value = parseInt(saveValue) - parseInt(display.value);
	} else if(operator_ == '*'){
	    display.value = parseInt(saveValue) * parseInt(display.value);
	} else if(operator_ == '/'){
	    display.value = parseInt(saveValue) / parseInt(display.value);
	}
}
	
	
	

