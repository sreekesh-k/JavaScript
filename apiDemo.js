/*
fetch() = function for makeing http request to fetch resources.(JSON,style data, files)
async fetching used for interacting with APIs to retrive and send data async ly over web.
detch(url,{options})
*/

/*example 1
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => console.log(response))
    .catch(error => console.error(error))

*/    
/*example 2
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data=> console.log(data))//(data.name)
    .catch(error => console.error(error))
*/
/*ecample 3
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok){
            throw new Error("No Pokemon")
        }
        return response.json()
    })
    .then(data=> console.log(data))//(data.name)
    .catch(error => console.error(error))
*/

/*
document.addEventListener("DOMContentLoaded",searchPokemon)
async function searchPokemon(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

        if(!response.ok)
        {
            throw new Error("Couldnot FInd")
        }
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.error(error)
    }
}
*/

const pokeball = document.getElementById("pokeball")
const imageElement = document.getElementById("pokemonImage")
function spin() {
    
    return new Promise((resolve) => {
        pokeball.classList.replace("slide","display")
        pokeball.classList.add("spinc")
        imageElement.classList.replace("display","slide")
        setTimeout(() => {
            pokeball.classList.remove("spinc")
            resolve()
        }, 2000)
    });
}


async function searchPokemon(){
    try{
        const pokemonName =  document.getElementById("searchbox").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok)
        {
            throw new Error("Couldnot Find")
        }
        const data = await response.json()
        const pokemon = data.sprites.front_default
        await spin()
        pokeball.classList.replace("display","slide")
        imageElement.src = pokemon
        imageElement.classList.replace("slide","display")
    }
    catch(error){
        console.error(error)
    }
}