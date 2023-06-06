import React from "react";
import Card from "../components/Card";
import enemies from "../utils/game/enemies.json";

export const EnemyHand = () => {
  return (
    <>
      {enemies[0].gameCards.map((cardData) => (
        <Card {...cardData} />
      ))}
    </>
  );
};
