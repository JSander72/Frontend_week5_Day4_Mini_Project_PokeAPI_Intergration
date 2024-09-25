async function fetchPokemonData(pokemonName) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
 
// JavaScript code to handle user input
const inputHandler = {
  get userinput() {
      return document.getElementById('search-pokemon').value;
  }
};

document.getElementById('search-pokemon').addEventListener('input', () => {
  const pokemonName = inputHandler.userinput;
  console.log('User searched for:', pokemonName);
  
});
  
  
  console.log(response);
  console.log(response.status);
  
  const pokemonData = await response.json();
  console.log(pokemonData);
  
  return pokemonData;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElemesearch-pokemon-pokemon").addEventListener("click", async () => {
    const searchForPokemon = document.getElementById("pokemon-name").value;
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
  });
});
