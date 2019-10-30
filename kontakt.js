let wrapperSelector = "#wrapper"

function send_form() {
    let navn = document.getElementById("navn").value 
    let epost = document.getElementById("mail").value
    let mobil = document.getElementById("mobil").value
    let tekst = document.getElementById("tilbakemelding").value
    let sporreskjema = document.getElementById("sporreskjema")
    
    sporreskjema.innerHTML = "<span id='bekreftelse'>Takk for tilbakemeldingen, " + navn + "." + "<br>" + "Du vil bli kontaktet på "
    + epost + " dersom det skulle være noe." + "<br>" + "Din melding: " + "<br>" + tekst + "</span>" 
}
