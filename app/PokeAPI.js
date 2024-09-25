async function fetchPokemonData(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  
    // Get response object with info about how it went 
    console.log(response)
    console.log(response.status)
  
    const pokemonData = await response.json();
    console.log(pokemonData);
  
    return pokemonData;
  }
  
  document.addEventListener("DOMContentLoaded", async () => {
    // Homework: Get the pokemon from search input (DOM)
    searchForPokemon = document.getElementById("search-pokemon").value
  
    const pikachuData = await fetchPokemonData("pikachu")
    const pokeInfoElement = document.getElementById("pokemon-info")
    pokeInfoElement.innerHTML = `
      <h2>${pikachuData.name}</h2>
      <img src="${pikachuData.sprites.front_default}" />
      <h3>${pikachuData.abilities[0].ability.name}</h3>
      <p>Height: ${pikachuData.height}</p>
      <p>Weight: ${pikachuData.weight}</p>
    `
  })

  document.getElementById("search-pokemon").addEventListener("click", function() {
    printPokemon()
    console.log("searching for pokemon")
  })