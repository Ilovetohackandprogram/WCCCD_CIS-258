/*      Garrick D. Smith
	  Hands-on Project 02-02
	   
	   WCCCD
	  
	  07-15-2024
 */

   document.getElementById("square").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the square";
   }
   
   document.getElementById("square").onmouseout = function() {
      document.getElementById("feedback").innerHTML = "";
   }
   
   document.getElementById("triangle").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the triangle";
   }
   
   document.getElementById("triangle").onmouseout = function() {
      document.getElementById("feedback").innerHTML = "";
   }   
   
   document.getElementById("circle").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the circle";
   }
   
   document.getElementById("circle").onmouseout = function() {
      document.getElementById("feedback").innerHTML = "";
   }
   