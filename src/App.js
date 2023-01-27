import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Nav from './Components/Nav'
import Dashboard from './Components/Dashboard'
import Connexion from './Components/Connexion'
import TicketPage from './Components/CreerTache'
import CategoriesContext from './Context'
import ObjetsTrouves from './Components/ObjetsTrouves'
import ObjetsPerdus from './Components/ObjetsPerdus'

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
            <Route path='/Dashboard' element={<Dashboard />} /> 
            <Route path='/Dashboard/ticket' element={<TicketPage />} />
            <Route path='/Components/Dashboard/ObjetsTrouves' element={<ObjetsTrouves />} /> 
            <Route path='/Components/Dashboard/ObjetsPerdus' element={<ObjetsPerdus />} /> 
          </Routes>
        </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  )
}

export default App