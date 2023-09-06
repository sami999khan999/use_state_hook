import { useState } from "react";

const playerObj = {
  name: "Luffi",
  age: 20,
  jersyNum: 9,
};

const Player = () => {
  const [player, setPlayer] = useState({});

  const handelerAddProperty = () => {
    setPlayer({ ...player, ...playerObj });
  };

  const handelerGoal = () => {
    const randomGoal = Math.floor(Math.random() * 10 + 1);

    setPlayer({ ...player, goal: randomGoal });
  };

  return (
    <div>
      <h2>Player Name: {player.name}</h2>
      <h2>Player Jersy: {player.jersyNum}</h2>
      <h2>Goal: {player.goal}</h2>

      <button onClick={handelerAddProperty}>Add Property</button>
      <br />
      <button onClick={handelerGoal}>Goal</button>
    </div>
  );
};

export default Player;
