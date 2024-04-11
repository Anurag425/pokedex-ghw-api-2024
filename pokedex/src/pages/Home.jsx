import React, { useState } from "react";
import PokemonCard from "../components/PokemonCard";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [isFound, setIsFound] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const [pokemon, setPokemon] = useState(null);
  // Your component logic here
  const handleSearch = () => {
    setIsFound(false);
    setIsNotFound(false);
    //use pookeapi to search for pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}`)
      .then((response) => {
        if (!response.ok) {
          setPokemon(null);
          setIsNotFound(true);
          throw new Error("Pokemon not found");
        }
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
        // console.log(pokemon);
        setIsFound(true);
        console.log("found");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("searching for ", searchText);
  };

  return (
    <>
      <div className="w-1/3 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="search w-full flex relative">
          <input
            className="searchTerm w-full h-10 border-2 border-blue-400 border-r-0 p-1 rounded-l-md text-blue-600 outline-none focus:border-blue-400"
            type="text"
            placeholder="Enter Pokemon name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="h-10 w-36 border border-blue-400 bg-blue-400 text-center text-white rounded-r-md cursor-pointer text-lg"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className=" w-auto absolute top-1/3 left-1/2 transform -translate-x-1/2 ">
        {isNotFound && <p className="text-red-500">Pokemon not found</p>}
        {isFound && <PokemonCard data={pokemon} />}
      </div>
    </>
  );
};

export default Home;
