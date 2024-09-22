<?php

require 'vendor/autoload.php'; 

$api = new PokePHP\PokeApi;

try {
    // Fetch data for a specific Pokémon, e.g., Pikachu
    $pokemonData = $api->pokemon('pikachu');
    $pokemon = json_decode($pokemonData, true);

    // Display some information about the Pokémon
    echo "Name: " . ucfirst($pokemon['name']) . "<br>";
    echo "Height: " . $pokemon['height'] . "<br>";
    echo "Weight: " . $pokemon['weight'] . "<br>";
    echo "Base Experience: " . $pokemon['base_experience'] . "<br>";

    // Display Pokémon abilities
    echo "Abilities: <br>";
    foreach ($pokemon['abilities'] as $ability) {
        echo "- " . ucfirst($ability['ability']['name']) . "<br>";
    }
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}
?>

