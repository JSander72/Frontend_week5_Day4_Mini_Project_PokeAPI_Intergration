const fetch = require('node-fetch');
// const { Query }= require('../src/Query.php');

// src/PokeApi.js
async function fetchPokemonData(pokemonName){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    console.log(response);

    const pokemon = await response.json();
    console.log(pokemonData);

    return pokemonData;
}
document.addEventListener('DOMContentLoaded', fetchPokemonData('pikachu'));

module.exports = {
    fetchPokemonData
};




// const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/${pokemonName}';

// async function getPokemonData(pokemonName) {
//     try {
//         const response = await fetch(`${POKE_API_URL}${pokemonName.toLowerCase()}`);
//         if (!response.ok) {
//             throw new Error('Pokemon not found');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching Pokemon data:', error);
//     }
// }

// // Example usage:
// getPokemonData('pikachu').then(data => console.log(data));

// module.exports = {
//     getPokemonData
// };