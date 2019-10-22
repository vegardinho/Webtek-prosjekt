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

// let form_navn = document.getElementById("navn")
// let form_mail = document.getElementById("mail")


// function send_form() {
//     if (form_navn.value === " " && form_mail.value === " ") {
//         alert("jnjf")
//         console.log("feil")
//     }
//     else {
//         form.submit()
//         console.log("submit")
//     }
// }