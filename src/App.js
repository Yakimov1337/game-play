import { useState } from 'react';
import {Route} from 'react-router-dom';

import Header from './components/Header.js';
import WelcomeWorld from './components/WelcomeWorld.js';
import CreateGame from './components/CreateGame.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import EditGame from './components/EditGame.js';
import GameDetails from './components/GameDetails.js';
import GameCatalog from './components/GameCatalog/GameCatalog.js';




function App() {
  const [page, setPage] = useState('/home');

  const navigationChangeHandler = (path) => {
    setPage(path);
  }
  const router = (path) => {
    let pathNames = path.split('/');

    let rootPath = pathNames[1];
    let argument = pathNames[2];

    const routes = {
      'home': <WelcomeWorld navigationChangeHandler={navigationChangeHandler} />,
      'games': <GameCatalog navigationChangeHandler={navigationChangeHandler} />,
      'register': <Register />,
      'edit': <EditGame />,
      'details': <GameDetails id={argument} />,
      'login': <Login />,
      'create-game': <CreateGame />
    };
    return routes[rootPath];
  }


  return (
    <div id="box">
      <Header
        navigationChangeHandler={navigationChangeHandler}
      />
      <main id="main-content">
        <Route exact path="/" component={WelcomeWorld}/>
        <Route path="/games" component = {GameCatalog}/>
      </main>
    </div>
  );
};

export default App;
