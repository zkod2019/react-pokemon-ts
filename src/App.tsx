import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import Pokemon from './components/ChosenPokemon' // alias --> changing the default PokeViewer to Pokemon

function App() {
  const [name,setName] = useState<string>("")
  return (
    <div className="h-full p-8 test-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1>Choose Your Pokemon</h1>
      <div className="card">
        <SearchBar searchInput={name} setSearchInput={setName}/>
        <Pokemon name={name} />
      </div>
     
    </div>
  )
}

export default App
