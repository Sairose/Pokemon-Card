import { PokemonCard } from "./components/PokemonCard"
import { Home } from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import { NavBar } from "./pages/NavBar"

export const App = () =>{

  return <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pokemon-card" element={<PokemonCard />}/>
      </Routes>
  </>
}