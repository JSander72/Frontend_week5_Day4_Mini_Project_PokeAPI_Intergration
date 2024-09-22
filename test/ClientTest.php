<?php

$api = new PokePHP\PokeApi;

// Fetch information about Pikachu
$pokemon = $api->pokemon('pikachu');

if (is_object($pokemon)) {
	echo $pokemon->name; // Output: pikachu
} else {
	echo "Failed to fetch Pokemon data.";
}