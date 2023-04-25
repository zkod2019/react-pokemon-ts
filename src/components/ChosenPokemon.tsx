//file name: components/ClickIncrease.js
import { Pokemon } from "../types/Pokemon";
import { useEffect,useState } from "react";
export interface IPokemonProps{
  name:string
}

function PokeViewer({name}:IPokemonProps) {
    const [pokemonName, setPokemon] = useState<Pokemon|null>(null) // render it
    const fetchUserData = () => {
        if (name == ""){
            return
        }
        fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
          .then(response => {
            return response.json()
          })
          .then(pokemonName => {
            setPokemon(pokemonName)
          }) // add catch later 
      };
    //
    useEffect(()=>{
      fetchUserData()
    },[name])
    
if (!pokemonName) return<div>no pokemon with that name</div>

//class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"
return (
  
  <div> 
    <div flex-none w-56>
        <h2>{pokemonName.name}</h2>
        <img w-50 h-50 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto src={pokemonName.sprites.front_default} alt={`${pokemonName.name} sprite` }/>
    </div>
    <p>Type: {pokemonName.types.map((type) => type.type.name).join(", ")}</p>
    <p>Height: {pokemonName.height}</p>
    <p>Weight: {pokemonName.weight}</p>
    <p>Abilities: {pokemonName.abilities.map((abilities) => abilities.ability.name).join(", ")}</p>
    <p>Location Area Encounters: {pokemonName.location_area_encounters}</p>
    <p>Moves: {pokemonName.moves.map((moves) => moves.move.name).join(", ")}</p>
    </div>
    );
}
export default PokeViewer; // alies works because it is exported as default
//ClickIncrease is now a wrapped component of the withCounter method.