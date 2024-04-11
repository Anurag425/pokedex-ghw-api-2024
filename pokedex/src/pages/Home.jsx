import React, { useState } from "react";
import PokemonCard from "../components/PokemonCard";

const Home = () => {
    const [searchText, setSearchText] = useState("");

    // Your component logic here

    return (
        <>
            <div class='search w-full flex relative '>
                <input class="searchTerm w-full "
                    type="text"
                    placeholder="Enter Pokemon name"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button type="submit"></button>
            </div>
            <PokemonCard />
        </>
    );
};

export default Home;