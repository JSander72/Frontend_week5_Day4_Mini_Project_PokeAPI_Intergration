const fetch = require('node-fetch');
const { Query }= require('../src/Query.php');

// src/PokeApi.js


const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/';

async function getPokemonData(pokemonName) {
    try {
        const response = await fetch(`${POKE_API_URL}${pokemonName.toLowerCase()}`);
        if (!response.ok) {
            throw new Error('Pokemon not found');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
    }
}

// Example usage:
getPokemonData('pikachu').then(data => console.log(data));

module.exports = {
    getPokemonData
};