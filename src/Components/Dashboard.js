import TicketCard from '../Components/AfficherTache'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import CategoriesContext from '../Context'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Dashboard = () => {
  const tickets = [
    {
      category: 'Tache 1',
      color: 'red',
      title: 'Accueillir les invité',
      owner: 'Emily Bouchard',
      status: 'Terminé',
      priority: 5,
      progress: 40,
      description:
        'Montrer à chaque invite l emplacement de leur place',
      timestamp: '2023-27-01 T07:36:17+0000',
    },
    {
      category: 'Tache 2',
      color: 'red',
      title: 'Sécurité de l évenement',
      owner: 'Bakary Goudiaby',
      status: 'En cours',
      priority: 4,
      progress: 2,
      description:
        'S assurer du bon déroulement de l evenemnt et prévenir toute perturbation',
      timestamp: '2023-27-01 T07:36:17+0000',
    },
    {
      category: 'Tache 3',
      color: 'red',
      title: 'Animateur de l evenement',
      owner: 'Eddy Zoungrana',
      status: 'Bloque',
      priority: 10,
      progress: 6,
      description:
        'Presenter les differentes activites de l evenement',
      timestamp: '2023-27-01 T07:36:17+0000',
    },
    {
      category: 'Tache 4',
      color: 'blue',
      title: 'Technicien de surface',
      owner: 'Tommy',
      avatar: null,
      status: 'En cours',
      priority: 2,
      progress: 0,
      description:
        'S assure de la propriete des lieux avant et apres l evenement',
      timestamp: '2023-27-01 T07:36:17+0000',
    },
  ]
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
              <h6>{uniqueCategory}</h6>
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
             
            <Link href="./Dashboard/CreerCompte" variant="CreerCompte">
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Créer un compte
            </Button>
            </Link>

            <Link href="./Dashboard/ticket" variant="ticket">
            <Button 
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Créer une tâche
            </Button>    
            </Link>
            
            <Link href="./Dashboard/ObjetsPerdus" variant="ObjetsPerdus">
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Remplir un formulaire d'objet perdu
            </Button>
            </Link>

            <Link href="./Dashboard/ObjetsTrouves" variant="ObjetsTrouves">
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Remplir un formulaire d'objet trouvé
            </Button>
            </Link>
      </div>
    </div>
  )
}

export default Dashboard