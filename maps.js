function hentKart() {
    var koordinater = {lat:63.422563, lng: 10.394979}

    var kart_egenskaper = {
        center: new google.maps.LatLng(koordinater),
        zoom: 14
    }

    var kart = new google.maps.Map(document.getElementById("kart_boks"), kart_egenskaper)

    var markor = new google.maps.Marker({
        position: koordinater,
        map: kart,
        title: "Vårt sted! :D"
    })
}


function send_form() {
    // alert(tilbakemelding.value)
    console.log("hei")
}

function valider() {
    var mail = document.getElementById("mail")
    var mobil = document.getElementById("mobil")
    var tilbakemelding = document.getElementById("tilbakemelding")

    if (mail.value == "" && mobil.value == "") {
        alert("Du må skrive inn enten mobilnummer eller e-postadresse");
    } else if (tilbakemelding.value < 10) {
        alert("Tilbakemeldingen må være på minst 10 tegn")
    } else {
        send_form();
    }
}
