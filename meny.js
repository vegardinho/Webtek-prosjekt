const mat = [
    {
        navn: "Lasagne",
        pris: 119,
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
    },

    {
        navn: "Spaghetti carbonara",
        pris: 99,
        inneholder: "Fløtesaus, bacon",
        allergener: ["laktose"]
    },

    {
        navn: "Grønn curry",
        pris: 79,
        inneholder: "Ris, paprika, blomkål, gullrot, bambus",
        allergener: ["gluten"]
    },

    {
        navn: "Pizza salami",
        pris: 120,
        inneholder: "Tomatsaus, ost, oregano, salami",
        allergener: ["laktose", "gluten"]
    }
]

// Populate menyen dynamisk med alle rettene vi har
function setup_meny()
{
    for (var item in mat)
    {      
        document.getElementById("matretter").innerHTML +=
        `<div id="`+mat[item].navn+`" class="matretter">
            <span class="mat_tittel">`+mat[item].navn+`</span>
            &nbsp&nbsp
            <span class="mat_pris">`+mat[item].pris+`kr</span>
            <button id="`+mat[item].navn+`_button" class="order_button" onclick="add(this.id)">Legg til</button>
            <br>
            <span class='inneholder'>`+mat[item].inneholder+`</span>
        </div>`
    }

    // Hver allergi blir tildelt en liste med retter som inneholder den
    allergy_foods = {
        'laktose':[],
        'notter':[],
        'gluten':[]
    }

    // Sorterer matretter etter allergener for lettere sortering
    mat.forEach(food => {
        food.allergener.forEach(al => {
            allergy_foods[al].push(food.navn)
        })
    })

}


// Diplay: none alle retter som ikke er ønsket basert på checkboxes
function sort_allergies()
{

    // Resetter alle rettene til å være synlig
    var retter = document.getElementsByClassName("matretter")
    for (var i = 0; i < retter.length; i++)
    {
        document.getElementById(retter[i].id).style.display = 'block'
    }
    

    // Henter ut alle allergen-boxer som er checked
    let data = document.querySelectorAll(".allergy:checked")

    // Itererer over raw data, henter ut ids, og lagrer dem i en array
    let allergies = []
    data.forEach(element => {
        allergies.push(element.id)
    })

    
    // Iterer over alle rettene som inneholder allergener som er uønsket, og hider dem
    allergies.forEach(allergy => {
        allergy_foods[allergy].forEach(hide_food => {
            document.getElementById(hide_food).style.display = 'none'
        })
    })
    


}

// Legger til den ønskede retten i handlekurven
function add(id)
{
    // Extrapolerer navnet til ønsket rett
    let name = id.split("_")[0]
    
    // Finner indexen til retten i mat-arrayen
    let item = 0
    for (var x = 0; x < mat.length; x++)
    {
        if (name == mat[x].navn)
        {
            item = x
        }
    }

    // Legger til retten i handlekurven
    document.getElementById("takeaway_handlekurv").innerHTML +=
    `<div id="`+mat[item].navn+`" class="matretter">
        <span class="mat_tittel">`+mat[item].navn+`</span>
        &nbsp&nbsp
        <span class="mat_pris">`+mat[item].pris+`kr</span>
        <button id="`+mat[item].navn+`_button" class="order_button" onclick="add(this.id)">Legg til</button>
        <br>
        <span class='inneholder'>`+mat[item].inneholder+`</span>
    </div>`
    
}



function main()
{
    setup_meny()
}

main()