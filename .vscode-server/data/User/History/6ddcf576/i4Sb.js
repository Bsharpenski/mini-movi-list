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
    const pokemonEls = getElementByClassName('pokemon');
    let removablePokemons = [];
    for (let i = 0; i < pokemonEls.length; i++ ){
        const pokemonEl = pokemonEls[i];
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
    pokemon El.classList.add('pokemon');
    const poke_types = pokemon.types.map((el) => el.type.name).slice(0, 1);
    const name = pokemon.name[0].toUppercase() + pokemon.name.slice(1);
    const poke_stat = pokemon.stats.map((el) => el.base_stat)
    const stats = poke_stat.slice(0, 3)
    const base_value = pokemon.stats.map((el) => el.base_stat);
    const base_stat = base_value.slice(0, 3);
    const stat = stats.map((stat) => {
        return `<li class="names">${stat}</li>`;
    }).join("");
    const pokeInnerHTML = `<div class="img-container">
    <img src="https://img.pokemondb.net/artwork/${pokemon.id}.jpg" alt="${name}"/>
    </div>
     `        
}