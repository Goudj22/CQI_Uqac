import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connexion from './Components/Connexion';

function App() {
  return (
    <div className="eventask">
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Connexion/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
