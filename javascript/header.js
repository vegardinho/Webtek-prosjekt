// Legger til header i body først
document.body.innerHTML =
`<header>

<div id="header">

    <div id="logo">
        <a href="index.html"><img src="img/Logo.svg" alt="Logo Samspiseriet"></a>
    </div>

    <div id="nav_bar">
        <ul id="nav">
            <li class="nav_element"><a href="om_oss.html">Om oss</a></li>
            <li class="nav_element"><a href="kontakt.html">Kontakt</a></li>
            <li class="nav_element"><a href="meny.html">Meny</a></li>
            <li class="nav_element"><a href="index.html">Hjem</a></li>
        </ul>
    </div>

</div>

</header>` + document.body.innerHTML

const nav = document.querySelectorAll('li.nav_element a') // Velger alle .nav_element

function active(page) { // Forandrer farger for valgt element
    nav[page].style.color = 'white'
    nav[page].style.backgroundColor = '#ff7800'
}

// Lager en variabel for sidenavn_js span på hver side
const index = document.getElementById('index_js')
const meny = document.getElementById('meny_js')
const kontakt = document.getElementById('kontakt_js')
const om_oss = document.getElementById('om_oss_js')

let link = "" 

// Sjekker om sidenavn_js span er på siden. Skjer hver gang en av sidene lastes inn.
// Lager korrekt link for hver siden. Brukes for validator.
if (document.contains(index)) {
    active(3) // 4. li
    link = "index.html"
} else if (document.contains(meny)) { // Vil her bruke funksjonen active og vil velge 3. element fra alle de valgte li elementene
    active(2) // 3. li
    link = "meny.html"
} else if (document.contains(om_oss)) {
    active(0) // 1. li
    link = "om_oss.html"
} else if (document.contains(kontakt)) {
    active(1) // 2. li
    link = "kontakt.html"
}

// "Appender" footer til slutten av body
document.body.innerHTML +=
`<footer>
<div id="laget_av">
    <p>Lagd av: Joon, Lucas, Magnus, Vegard</p>
</div>

<div id="epost_nr_adresse">
    <p>samspiseriet@gmail.com</p>
</div>

<div id="telefonnummer">
    <p>666-69-420</p>
</div>

<div id="copyright">
    <p><a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fvegardinho.github.io%2F`+link+`">Samspiseriet© 2019</a></p>
</div>
</footer>`

// Korrigerer for position fixed på header/navbar
if (window.innerWidth <= 760) {
   document.querySelector(wrapperSelector).style.marginTop = document.getElementById("header").clientHeight/4.4 + "px";
} else if (document.contains(kontakt)) {
   document.querySelector(wrapperSelector).style.marginTop = document.getElementById("header").clientHeight + 100 + "px";
} else {
   document.querySelector(wrapperSelector).style.marginTop = document.getElementById("header").clientHeight + "px";
}

// document.getElementById("logo_image").style.setProperty("height", '3.1em');
