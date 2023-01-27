import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connexion from './Components/Connexion';
import ObjetsPerdus from './Components/ObjetsPerdus';
import ObjetsTrouves from './Components/ObjetsTrouves';

function App() {
  return (
    <div className="eventask">
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Connexion/>}/>
         <Route path='/ObjetsPerdus' element={<ObjetsPerdus/>}/>
         <Route path='/ObjetsTrouves' element={<ObjetsTrouves/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
