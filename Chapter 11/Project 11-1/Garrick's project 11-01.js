"use strict";
/*     Garrick D. Smith
	  Hands-on Project 11-01
	   
	   WCCCD
	  
	  07-27-2024
*/

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = function() {   
let dateStr = dateBox.value;
   fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateStr}`)
        .then(response => response.json())
        .then(json => showPicture(json))
        .catch(error => console.log(error));
        
};

function showPicture(json) {
   if (json.media_type === "video") {
      imageBox.innerHTML = `<iframe src="${json.url}"></iframe><h1>${json.title}</h1><p>${json.explanation}</p>`;
   } else if (json.media_type === "image") {
      imageBox.innerHTML = `<img src="${json.url}" /><h1>${json.title}</h1><p>${json.explanation}</p>`;
   } else {
      imageBox.innerHTML = "Image not Available";
   }
}