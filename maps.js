let wrapperSelector = "#wrapper"

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
    let navn = document.getElementById("navn").value 
    let epost = document.getElementById("mail").value
    let mobil = document.getElementById("mobil").value
    let tekst = document.getElementById("tilbakemelding").value
    let sporreskjema = document.getElementById("sporreskjema")

    sporreskjema.innerHTML = "Takk for tilbakemeldingen, " + navn + "<br>" + "Du vil bli kontaktet på " + epost


    // alert("Takk for tilbakemeldingen", navn)
}

