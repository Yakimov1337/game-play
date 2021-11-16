import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import * as gameService from '../../services/gameService';

const  GameCatalog = ({
  navigationChangeHandler,
}) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      gameService.getAll()
        .then(result => {
          setGames(result);
        })
    }, 1000);
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

export default GameCatalog;