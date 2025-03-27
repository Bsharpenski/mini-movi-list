let pokemons = [];
const poke_container = document.getElementById('poke_container');
const url = "https://pokeapi.co/api/v2/pokemon";
const pokemons_number = 151;
const search = document.getElementById("search");
const  form = document.getElementById("form");

const fetchPokemons = async () => {
    for (let i=1; i<= pokemons_number; i++){
        await getAllPokemon(i);
    }
    pokemons.forEach((pokemon) => createPokemonCard(pokemon));
};

const removePokemon = () => {
    const pokemonELs = getElementByClassName('pokemon');
    let removablePokemons = [];
    for (let i = 0; i < pokemonELs.length; i++ ){
        const pokemon EL = pokemonELs[i];
        removablePokemons = [...removablePokemons, pokemonEl];
    }
    removablePokemons.forEach((remPoke) => remPoke.remove());
};
const getPokemon = async (id) => {
    const searchPokemons = pokemons.filter((poke) => poke.name === id);
    removePokemon();
    searchPokemons.forEach((pokemon) => createPokemonCard(pokemon));
};
const getAllPokemon = async (id) => {
    const res = await fetch(`${url}/${id}`);
    const pokemon = await res.json();
    pokemons = [...pokemons.pokemon];
};
fetchPokemons();

function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div)');
    
}