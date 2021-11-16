import Header from './components/Header.js';
import WelcomeWorld from './components/WelcomeWorld.js';
import CreateGame from './components/CreateGame.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import EditGame from './components/EditGame.js';
import GameDetails from './components/GameDetails.js';




function App() {
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
