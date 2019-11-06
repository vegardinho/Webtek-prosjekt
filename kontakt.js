function send_form() {
    let navn = document.getElementById("navn").value 
    let epost = document.getElementById("mail").value
    let mobil = document.getElementById("mobil").value
    let tekst = document.getElementById("tilbakemelding").value
    let sporreskjema = document.getElementById("sporreskjema")

    sporreskjema.innerHTML = "Takk for tilbakemeldingen din til Samspiseriet, " + navn + "<br>" + "Eventuelt svar vil komme på " + epost + "<br> så fort som overhode mulig!" 

}
