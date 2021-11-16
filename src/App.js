import Header from './components/Header.js';
import WelcomeWorld from './components/WelcomeWorld.js';
import CreateGame from './components/CreateGame.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import EditGame from './components/EditGame.js';
import GameDetails from './components/GameDetails.js';
import Catalog from './components/Catalog.js';




function App() {
  const routers = {
    '/home': WelcomeWorld,
    '/games': Catalog,
    '/register': Register,
    '/edit': EditGame,
    '/details': GameDetails,
    '/login': Login,
    '/create': CreateGame
  }
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <WelcomeWorld />
      </main>
    </div>
  );
};

export default App;
