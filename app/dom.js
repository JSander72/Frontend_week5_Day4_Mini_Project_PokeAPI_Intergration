document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const resultContainer = document.getElementById('resultContainer');

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
            try {
                const response = await fetch(`https://pokeapi.co/docs/v2`);
                if (!response.ok) {
                    throw new Error('Pokemon not found');
                }
                const data = await response.json();
                displayPokemon(data);
            } catch (error) {
                resultContainer.innerHTML = `<p>${error.message}</p>`;
            }
        }
    });

    function displayPokemon(pokemon) {
        resultContainer.innerHTML = `
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p>Height: ${pokemon.height}</p>
            <p>Weight: ${pokemon.weight}</p>
            <p>Type: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        `;
    }
});