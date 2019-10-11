const mat = [
    {
        navn: "Lasagne",
        pris: 120,
        inneholder: "Ost, pasta, kjøttdeig, tomatsaus, basilikum",
        allergener: ["laktose"]
    },

    {
        navn: "Vegetar burger",
        pris: 105,
        inneholder: "Salat, tomat, løk, basilikum",
        allergener: ["laktose", "gluten"]
    },

    {
        navn: "Chilli con Carne",
        pris: 89,
        inneholder: "Chilli, kjøttdeig, løk, bønner",
        allergener: []
    },

    {
        navn: "Spaghetti Bolognese",
        pris: 89,
        inneholder: "Kjøttdeig, tomatsaus, løk, pasta, oregano",
        allergener: ["gluten"]
    }
]


function populate_meny()
{
    for (var item in mat)
    {      
        document.getElementById("matretter").innerHTML += `<div id="`+mat[item].navn+`" class="matretter">`+ mat[item].navn +`</div>`
    }
}