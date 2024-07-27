"use strict";
/*    Garrick D. Smith
	  Hands-on Project 05-03
	   
	   WCCCD
	  
	  07-26-2024
*/
//define variables 
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

//function to test value of n.nodeName is = to heading
for (let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
    if(n.nodeName === heading) {
        let anchor = document.createElement("a");
        anchor.name = "doclink" + headingCount;
        n.insertBefore(anchor, n.firstElementChild);
        
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        listItem.appendChild(link);
        
        link.textContent = n.textContent;
        listItem.href = "#" + "doclink" + headingCount;
        
        toc.appendChild(listItem);
        
        headingCount++;
    }
}