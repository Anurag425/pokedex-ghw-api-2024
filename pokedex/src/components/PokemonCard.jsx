import React, { useState } from "react";

const PokemonCard = ({ data }) => {
  // Your component code here

  const [loading, setLoading] = useState(true);

  console.log(data);
  const name = data.species.name;
  const height = data.height;
  const weight = data.weight;
  const spriteUrl = data.sprites.front_default;
  const stats = {
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    speed: data.stats[5].base_stat,
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="flex justify-between">
        <div className="mb-4">
          <h2 className="text-2xl mb-2">{name}</h2>
          <p className="text-gray-700 text-base">Height: {height}</p>
          <p className="text-gray-700 text-base">Weight: {weight}</p>
        </div>
        <img className="w-40 h-40" src={spriteUrl} alt={name} />
      </div>
      <div>
        <h3 className="text-xl mb-2">Stats:</h3>
        <p className="text-gray-700 text-base">HP: {stats.hp}</p>
        <p className="text-gray-700 text-base">Attack: {stats.attack}</p>
        <p className="text-gray-700 text-base">Defense: {stats.defense}</p>
        <p className="text-gray-700 text-base">Speed: {stats.speed}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
