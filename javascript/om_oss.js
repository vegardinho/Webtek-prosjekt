//Finner alle kolonnelementer, og hoyden til elementene
var kolonner;
var kolHeight;
var loadedSite = false;

// Setter parametere etter siden er lastet
window.onload = function() {
   kolonner = document.getElementsByClassName("kolonne");
   kolHeight = kolonner[1].offsetHeight;
   loadedSite = true;
}

//Sjekker om elementet er i vinduet til enheten og
// returnerer true hvis hele kolonneelementet får plass i viewport
function inViewport(element) {
   var pos = element.getBoundingClientRect();
   var vinduhoyde = window.innerHeight;
   var minGap = vinduhoyde - kolHeight - (vinduhoyde/10);
   return (pos.top < minGap && pos.top > 0);
}

// Lytter etter skroll, og kaller på funksjonen inViewport med alle kolonneelementer
document.addEventListener('scroll', function sjekkElement(event) {
   if (loadedSite) {
      for (var i = 0; i < kolonner.length; i++) {
	 if (inViewport(kolonner[i]) && !kolonner[i].classList.contains("desktop_only")) {
	    if (!(kolonner[i].classList.contains("visTekst"))) {
	       kolonner[i].classList.add("visTekst");
	    }
	 } else {
	    kolonner[i].classList.remove("visTekst");
	 }
      }
   }
});
