import { Link } from 'react-router-dom'
import PriorityDisplay from './OrdrePriorite'
import ProgressDisplay from './ProgressionTache'
import StatusDisplay from './EtatTache'
import DeleteBlock from './SupprimerTache'

const TicketCard = ({ color, ticket }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-color" style={{ backgroundColor: color }}></div>
      <Link to={`/Dashboard/ticket/${ticket.documentId}`} id="link">
        <h3>{ticket.title}</h3>
        <StatusDisplay status={ticket.status} />
        <PriorityDisplay priority={Number(ticket.priority)} />
        <ProgressDisplay progress={Number(ticket.progress)} />
      </Link>
      <DeleteBlock documentId={ticket.documentId} />
    </div>
  )
}

export default TicketCard