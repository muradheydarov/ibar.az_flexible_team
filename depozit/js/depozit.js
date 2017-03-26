var calc=document.querySelector('.calc');
var mebleg=calc.querySelector('.mebleg');
var h4Tag=mebleg.querySelector('h4');
var inputTag=mebleg.querySelector('input');

function changeVal(){
	inputValue=inputTag.value;
	h4Tag.innerHTML=inputValue;
	faiz();
}


var muddet=calc.querySelector('.muddet');
var h4Muddet=muddet.querySelector('h4');
var inputMuddet=muddet.querySelector('input');
 
function change(){
	inputValue=inputMuddet.value;
	h4Muddet.innerHTML=inputValue;
	sag();
}



var faizDeyeri_sol=document.querySelector('.faizDeyeri_sol');
var mebleg_ikinci=faizDeyeri_sol.querySelector('.mebleg');
var muddet_ikinci=faizDeyeri_sol.querySelector('.muddet');
var faizDeyeri_sag=document.querySelector('.faizDeyeri_sag');
var h4=faizDeyeri_sag.querySelector('h4');
var h4Mebleg_ikinci=mebleg_ikinci.querySelector('h4');
var h4Muddet_ikinci=muddet_ikinci.querySelector('h4');

var valueH4Tag=h4Tag.innerHTML;
var valueH4Ta=h4Muddet.value;
var valueH4=h4.innerHTML;
var valueH4meb=h4Mebleg_ikinci.value;
var valueH4mud=h4Muddet_ikinci.value;

function faiz(){
	h4Mebleg_ikinci.innerHTML=inputValue*h4.innerHTML;
	h4Muddet_ikinci.innerHTML=(h4Mebleg_ikinci.innerHTML/12).toFixed();
}
function sag(){
	if(inputValue != 12){
		h4.innerHTML=12;
	}else{
		h4.innerHTML=11;
	}
}
