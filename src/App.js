/*import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './Components/Dashboard'
import Connexion from './Components/Connexion';
import ObjetsPerdus from './Components/ObjetsPerdus';
import ObjetsTrouves from './Components/ObjetsTrouves';

function App() {
  return (
    <div className="eventask">
      <BrowserRouter>
        <Routes>
         <Route path="/Dashboard" element={<Dashboard />} />
         <Route path='/' element={<Connexion/>}/>
         <Route path='/ObjetsPerdus' element={<ObjetsPerdus/>}/>
         <Route path='/ObjetsTrouves' element={<ObjetsTrouves/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
*/

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Nav from './Components/Nav'
import Dashboard from './Components/Dashboard'
import Connexion from './Components/Connexion';
import TicketPage from './Components/CreerTache'
import CategoriesContext from './Context'

const App = () => {
  const [categories, setCategories] = useState(null)
  const value = { categories, setCategories }

  return (
    <div className="app">
      <CategoriesContext.Provider value={value}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Connexion/>}/>
            <Route path="/Dashboard" element={<Dashboard />} /> 
            <Route path="/Dashboard/ticket" element={<TicketPage />} />
          </Routes>
        </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  )
}

export default App