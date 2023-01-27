import './App.css';
import Connexion from './Components/Connexion';
import Inscription from './Components/Inscription';
import Objetsperdus from './Components/ObjetsPerdus';


function App() {
  return (
    <div className="eventask">
      <Connexion/>
      <Inscription/>
      <Objetsperdus/>
      
    </div>
  );
}

export default App;
