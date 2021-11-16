import { useEffect, useState } from "react";
import GameCard from "./GameCard";

export default function Catalog({
  navigationChangeHandler,
}) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/games?sortBy=_createdOn%20desc')
      .then(res => res.json())
      .then(result => {
        setGames(result);
      });
  }, []);
  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {games.length > 0
        ? games.map(game => <GameCard key={game._id} game={game} navigationChangeHandler={navigationChangeHandler} />)
        : <h3 className="no-articles">No articles yet</h3>
      }
    </section>
  );
};