async function fetchPokemonData(pokemonName) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  
 
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("search-pokemon").addEventListener("click", async () => {
    const searchForPokemon = document.getElementById("pokemon-name").value;
    try {
      const pokemonData = await fetchPokemonData(searchForPokemon);
      const pokeInfoElement = document.getElementById("pokemon-info");
      pokeInfoElement.innerHTML = `
        <h2>${pokemonData.name}</h2>
        <img src="${pokemonData.sprites.front_default}" />
        <h3>${pokemonData.abilities[0].ability.name}</h3>
        <p>Height: ${pokemonData.height}</p>
        <p>Weight: ${pokemonData.weight}</p>
      `;
      console.log("searching for pokemon");
    } catch (error) {
      console.error('Error fetching the Pokémon data:', error);
    } 
    
    if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  const pokemonData = await response.json();
  return pokemonData;
  });
});

// Assuming you have an input field in your HTML
// <input type="text" id="pokemon-name" />

// Removed redundant input handler and event listener
