/*     
	 Garrick D. Smith
	  Hands-on Project 02-01
	   
	   WCCCD
	  
	  07-15-2024
 */



function FarenheitToCelsius(degree) {
   return (degree - 32)/1.8;
}

function CelsiustoFarenheit(degree) {
   return degree*1.8 + 32;
}

document.getElementById("cValue").onchange = function() {
   let cDegree = document.getElementById("cValue").value;
   document.getElementById("fValue").value = CelsiustoFarenheit(cDegree);
}

document.getElementById("fValue").onchange = function() {
   let fDegree = document.getElementById("fValue").value;
   document.getElementById("cValue").value = FarenheitToCelsius(fDegree);
}