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


function setup_meny()
{
    for (var item in mat)
    {      
        document.getElementById("matretter").innerHTML += `<div id="`+mat[item].navn+`" class="matretter">`+ mat[item].navn +`</div>`
    }

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

function sort_allergies()
{

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

    
    allergies.forEach(allergy => {
        allergy_foods[allergy].forEach(hide_food => {
            console.log("hiding " + hide_food);
            
            document.getElementById(hide_food).style.display = 'none';
        })
    })
    


}





function main()
{
    setup_meny()
}

main()