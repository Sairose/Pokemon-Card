export const PokemonList = ({pokemonData}) =>{
    console.log(pokemonData)
    return <div className="outer-div">
        <h2>{pokemonData.name}</h2>
        <img src={pokemonData.sprites.back_default} alt="" />
        <div className="pokemon-details">
            <p>
                {pokemonData.types.map((typeValue) =>typeValue.type.name).join(" , ")}
            </p>
            <p>Height: {pokemonData.height}</p>
            <p>Base-Experience: {pokemonData.base_experience}</p>
            <p>Wieght: {pokemonData.weight}</p>
        </div>
    </div>

}