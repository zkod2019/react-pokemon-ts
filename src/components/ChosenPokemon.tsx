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
  <div className = "relative"> 
    <div className="flex flex-col">
        <h2 className="items-center justify-center py-6 text-center text-2xl font-semibold uppercase text-white">{pokemonName.name}</h2>
        <img className="items-right w-50 h-50 md:h-auto md:rounded-none rounded-full mx-auto" src={pokemonName.sprites.front_default} alt={`${pokemonName.name} sprite` }/>
    </div>
    <div className="flex flex-row items-start gap-8 bg-blue-300 p-5 bg-opacity-50 rounded-md text-white">
      <div className="text-center flex flex-col items-start hover:border-4 hover:border-purple-600 hover:bg-pink-300 p-3 rounded-md text-base/7 hover:text-purple-900">
        <p className="w-full">Type: {pokemonName.types.map((type) => type.type.name).join(", ")}</p>
        <p className="w-full">Height: {pokemonName.height}</p>
        <p className="w-full">Weight: {pokemonName.weight}</p>
        <p className="w-full">Location Area Encounters: {pokemonName.location_area_encounters}</p>
        <p className="w-full">Abilities: {pokemonName.abilities.map((abilities) => abilities.ability.name).join(", ")}</p>
        <p className="w-full">Stats: {pokemonName.stats.map((stats) => stats.base_stat).join(", ")}</p>
      </div>
      <p className="flex flex-col items-center text-justify hover:border-4 hover:border-purple-600 hover:bg-pink-300 p-3 rounded-md text-base/7 hover:text-purple-900">Moves: {pokemonName.moves.map((moves) => moves.move.name).join(", ")}</p>
    </div>
    
  </div>
    );
}
export default PokeViewer; // alies works because it is exported as default
//ClickIncrease is now a wrapped component of the withCounter method.