const nav = document.getElementsByClassName('nav_element')

function active(page) {
    nav[page].style.color = 'white'
    nav[page].style.backgroundColor = '#ff7800'
}

if (document.URL.contains(Hjem)) {
    active(0)
} else if (document.URL.contains(Meny)) {
    active(1)
} else if (document.URL.contains(Om_oss)) {
    active(2)
} else if (docuemnt.URL.contains(Kontakt)) {
    active(3)
}