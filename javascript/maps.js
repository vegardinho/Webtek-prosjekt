// Google Maps API som henter et kart og lokasjon. 
// Brukte https://developers.google.com/maps/documentation/javascript/tutorial 
// for hjelp og inspirasjon

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

