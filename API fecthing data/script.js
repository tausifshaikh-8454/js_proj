

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

//     .then(response => {

//         if(response.ok){
//             return response.json()
            
//         }
//         else{
//             throw new Error("Data does not fecth or available")
//         }
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.error(error)
//     });
 

    async function fetchData(){
        
        try{

            let pokeName = document.getElementById("pokeName").value
            let PokeImage = document.getElementById("pokemonImage")

            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
                
            if(response.ok){
                let data = await response.json();
                console.log(data)
                
                PokeImage.style.display = "block";
                PokeImage.src = data.sprites.back_default;


            }
            else{
                throw new Error("Could Not fetch the data")
            }
        }
        catch(error){
            console.error(error)

        }
    }


