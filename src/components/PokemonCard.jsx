import { useEffect, useState } from "react";
import { PokemonList } from "./PokemonList";

export const PokemonCard = () => {
    const [pokemon, setPokemon] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(null);

    //getting api
    const pokemonApi = "https://pokeapi.co/api/v2/pokemon?limit=200";

    //function for fetching data from api

    const fetchData = async () => {
        try {
            const response = await fetch(pokemonApi);
            const responseData = await response.json();

            // console.log(responseData);

            const gettingAllUrl = responseData.results.map(async (curValue) => {
                const res = await fetch(curValue.url);
                const returnedUrl = await res.json();
                // console.log(returnedUrl)
                return returnedUrl;
            })

            // console.log(gettingAllUrl); 

            const resultedData = await Promise.all(gettingAllUrl);
            // console.log(resultedData);

            setPokemon(resultedData);
            // console.log(pokemon)

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(error);
        }

    }

    useEffect(() => {
        fetchData();
    }, [])

    //loading 
    if(loading){
        return <h1>Loading...</h1>
    }

    //error
    if(err){
        return <h1>{err.message}</h1>
    }

    //search data

    const searchedData = pokemon.filter((curValue) => (curValue.name.toLowerCase()).includes(search));

    return <>

        <div className="search">
            <p>Search Pokemon Cards:</p>
            <input type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        <div className="cards">
            {
                searchedData.map((value) => {
                    return <PokemonList key={value.id} pokemonData={value} />
                })
            }
        </div>
    </>
}