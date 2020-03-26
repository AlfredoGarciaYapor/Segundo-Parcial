

var x = 0;
document.getElementById("txtActual").value = x;


function agregarManzanas(x, y){
	x = x + y;
	document.getElementById("txtActual").value = x;
}

function agregar5(){
	x = parseInt(document.getElementById("txtActual").value);
	agregarManzanas(x, 5);
}

function agregar15(){
	x = parseInt(document.getElementById("txtActual").value);
	agregarManzanas(x, 15);
}

function agregar30(){
	x = parseInt(document.getElementById("txtActual").value);
	agregarManzanas(x, 30);
}

function agregar50(){
	x = parseInt(document.getElementById("txtActual").value);
	agregarManzanas(x, 50);
}

function mostrarActual(){
	x = parseInt(document.getElementById("txtActual").value);
	var num = x * 45;
	alert("La cantidad actual de manzanas es de: "+ num);
}

function mostrarTotal(){
	x = parseInt(document.getElementById("txtTotal").value);
	var num = x * 45;
	alert("La cantidad actual de manzanas es de: "+ num);
}

function calcular(){
	x = parseInt(document.getElementById("txtActual").value)*45;
	var num = 250*45;
	var porcentaje = (x*100)/num;
	document.getElementById("txtPorcentaje").value = porcentaje;

	if(porcentaje>=70){
		document.getElementById("image").src = "camion.jpg";
	}
}

function reset(){

	document.getElementById("txtActual").value = 0;
	document.getElementById("image").src = "manzanas.jpg";
	document.getElementById("txtPorcentaje").value = 0;
}