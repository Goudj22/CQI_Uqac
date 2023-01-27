import TicketCard from '../Components/AfficherTache'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import CategoriesContext from '../Context'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Dashboard = () => {
  const [tickets, setTickets] = useState(null)
  const { categories, setCategories } = useContext(CategoriesContext)

  useEffect(async () => {
    const response = await axios.get('http://localhost:3000/Dashboard/tickets')

    //wasn't sure how to get the Documet Id with the object.. open to better suggestions
    const dataObject = response.data.data

    const arrayOfKeys = Object.keys(dataObject)
    const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key])
    const formattedArray = []
    arrayOfKeys.forEach((key, index) => {
      const formmatedData = { ...arrayOfData[index] }
      formmatedData['documentId'] = key
      formattedArray.push(formmatedData)
    })

    setTickets(formattedArray)
  }, [])

  useEffect(() => {
    setCategories([...new Set(tickets?.map(({ category }) => category))])
  }, [tickets])

  const colors = [
    'rgb(255,179,186)',
    'rgb(255,223,186)',
    'rgb(255,255,186)',
    'rgb(186,255,201)',
    'rgb(186,225,255)',
  ]

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ]

  return (
    <div className="dashboard">
      <h1>Tableau de bord</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
            <Link href="./Components/Dashboard/CreerCompte" variant="CreerCompte">
              Créer un compte
            </Link>
            </Button>
            <Button 
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
             <Link href="./Dashboard/ticket" variant="ticket">
                Créer une tâche
              </Link>
            </Button>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              <Link href="./Components/Dashboard/ObjetsPerdus" variant="ObjetsPerdus">
                Remplir un formulaire d'objet perdu
              </Link>
            </Button>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              <Link href="./Components/Dashboard/ObjetsTrouves" variant="ObjetsTrouves">
                Remplir un formulaire d'objet trouvé
              </Link>
            </Button>
      </div>
    </div>
  )
}

export default Dashboard