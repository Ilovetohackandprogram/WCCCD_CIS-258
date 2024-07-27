"use strict";
/*     Garrick D. Smith
	  Hands-on Project 06-01
	   
	   WCCCD
	  
	  07-27-2024
*/

let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function() {
    if(pwd.validity.patternMismatch) {
        pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
    } else if(pwd === pwd2) { 
        pwd.setCustomValidity("Your passwords must match");
    } else {
        pwd.setCustomValidity("");
    }
});