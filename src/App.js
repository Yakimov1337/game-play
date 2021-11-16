import Header from './components/Header.js';
import WelcomeWorld from './components/WelcomeWorld.js';
import CreateGame from './components/CreateGame.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import EditGame from './components/EditGame.js';
import GameDetails from './components/GameDetails.js';
import Catalog from './components/Catalog.js';
import { useState, createElement } from 'react';




function App() {
  const [page, setPage] = useState('/home');

  const routes = {
    '/home': <WelcomeWorld/>,
    '/games': <Catalog/>,
    '/register': <Register/>,
    '/edit': <EditGame/>,
    '/details': <GameDetails/>,
    '/login': <Login/>,
    '/create-game': <CreateGame/>
  };
  const navigationChangeHandler = (path) => {
    setPage(path);
  }

  return (
    <div id="box">
      <Header
        navigationChangeHandler={navigationChangeHandler}
      />
      <main id="main-content">
        {routes[page] || <h1>No page Found</h1>}
      </main>
    </div>
  );
};

export default App;
