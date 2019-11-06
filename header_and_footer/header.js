document.body.innerHTML =
`<header>

<div id="header">

    <div id="logo">
        <img src="/img/Logo.svg" alt="Logo Samspiseriet">
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

const nav = document.querySelectorAll('li.nav_element a')

function active(page) {
    nav[page].style.color = 'white'
    nav[page].style.backgroundColor = '#ff7800'
}

const index = document.getElementById('index_js')
const meny = document.getElementById('meny_js')
const kontakt = document.getElementById('kontakt_js')
const om_oss = document.getElementById('om_oss_js')

let link = ""

if (document.contains(index)) {
    active(0)
    link = "index.html"
} else if (document.contains(meny)) {
    active(1)
    link = "meny.html"
} else if (document.contains(om_oss)) {
    active(2)
    link = "om_oss.html"
} else if (document.contains(kontakt)) {
    active(3)
    link = "kontakt.html"
}

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


document.querySelector(wrapperSelector).style.marginTop = document.getElementById("header").clientHeight + "px"


document.getElementById("logo_image").style.setProperty("height", '3.1em')