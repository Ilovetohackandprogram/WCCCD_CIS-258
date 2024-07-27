"use strict";
/*  
     Garrick D. Smith
	  Hands-on Project 05-02
	   
	   WCCCD
	  
	  07-26-2024
*/

let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

for(let i = 0; i < images.length; i++) {
    
    images[i].onclick = function() {
        if(this.parentElement.id === "photo_bucket") {
           let newItem = document.createElement("li");
           photoList.appendChild(newItem);
           newItem.appendChild(this);
       } else {
           let oldItem = this.parentElement;
           photoBucket.appendChild(this);
           oldItem.parentElement.removeChild(oldItem);
        }
    }
}