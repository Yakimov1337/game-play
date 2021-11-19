import * as gameService from '../services/gameService.js';
import { useState, useEffect } from 'react';
import LatestGameCard from './LatestGameCard.js';

export default function WelcomeWorld() {
  const [games, setGames] = useState([]);

  // useEffect(async () => {
  //   let result = await gameService.getLatest();
  //   setGames(result);
  // });
  useEffect(() => {
    gameService.getLatest()
        .then(result => {
            setGames(result);
        })
}, []);
  return (
    <section id="welcome-world">

      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="./images/four_slider_img01.png" alt="hero" />

      <div id="home-page">
        <h1>Latest Games</h1>

          {
            games.length>0
            ? games.map(x=> <LatestGameCard 
              key={x._id} 
              game={x} />)
            : <p className="no-articles">No games yet</p>
          }
      </div>
    </section>
  );
};