import { useState } from 'react'
//import './App.css'
import SearchBar from './components/SearchBar'
import Pokemon from './components/ChosenPokemon' // alias --> changing the default PokeViewer to Pokemon

function App() {
  const [name,setName] = useState<string>("")
  return (
    <div className="h-screen p-8 test-slate-800 bg-gradient-to-r from-cyan-300 to-blue-500">
        <SearchBar searchInput={name} setSearchInput={setName}/>
        <Pokemon name={name} />
    </div>
  )
}

export default App
