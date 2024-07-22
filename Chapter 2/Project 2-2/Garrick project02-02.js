/*     Garrick D. Smith
	  Hands-on Project 02-02
	   
	   WCCCD
	  
	  07-15-2024
 */
 
function verifyForm() {
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let phone = document.getElementById("phone").value;
   (name && email && phone) ? 
      window.alert("Thank you!") : 
      window.alert("Please fill in all fields");
}

document.getElementById("submit").addEventListener("click", verifyForm);