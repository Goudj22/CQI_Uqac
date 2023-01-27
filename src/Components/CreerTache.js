import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import CategoriesContext from '../Context'

const TicketPage = ({ editMode }) => {

  const [formData, setFormData] = useState({
    status: 'not started',
    progress: 0,
    timestamp: new Date().toISOString(),
  })
  const { categories, setCategories } = useContext(CategoriesContext)

  const navigate = useNavigate()
  let { id } = useParams()

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editMode) {
      const response = await axios.put(`http://localhost:3000/Dashboard/tickets/${id}`, {
        data: formData,
      })
      const success = response.status === 200
      if (success) {
        navigate('/')
      }
    }
    if (!editMode) {
      console.log('posting')
      const response = await axios.post('http://localhost:3000/Dashboard/tickets', {
        formData,
      })
      const success = response.status === 200
      if (success) {
        navigate('/')
      }
    }
  }

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3000/Dashboard/tickets/${id}`)
    console.log('AAAAAA', response)
    setFormData(response.data.data)
  }

  useEffect(() => {
    if (editMode) {
      fetchData()
    }
  }, [])

  console.log('EDITcategories', categories)
  console.log('formData', formData.status)
  console.log('formData.status', formData.status === 'stuck')
  return (
    <div className="ticket">
      <h1>{editMode ? 'Update Your Ticket' : 'Creer une tache'}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="Nom de tache">Titre</label>
            <input
              id="Nom de tache"
              name="Nom de tache"
              type="Nom de tache"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />

            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />

            <label>Priorite</label>
            <div className="multiple-input-container">
              <input
                id="priority-1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={1}
                checked={formData.priority == 1}
              />
              <label htmlFor="priority-1">1</label>
              <input
                id="priority-2"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={2}
                checked={formData.priority == 2}
              />
              <label htmlFor="priority-2">2</label>
              <input
                id="priority-3"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={3}
                checked={formData.priority == 3}
              />
              <label htmlFor="priority-3">3</label>
              <input
                id="priority-4"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={4}
                checked={formData.priority == 4}
              />
              <label htmlFor="priority-4">4</label>
              <input
                id="priority-5"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={5}
                checked={formData.priority == 5}
              />
              <label htmlFor="priority-5">5</label>
            </div>

            {editMode && (
              <>
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  min="0"
                  max="100"
                  onChange={handleChange}
                />
                <label htmlFor="progress">Progress</label>

                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option selected={formData.status == 'done'} value="done">
                    Done
                  </option>
                  <option
                    selected={formData.status == 'working on it'}
                    value="working on it"
                  >
                    Working on it
                  </option>
                  <option selected={formData.status == 'stuck'} value="stuck">
                    Stuck
                  </option>
                  <option
                    selected={formData.status == 'not started'}
                    value="not started"
                  >
                    Not Started
                  </option>
                </select>
              </>
            )}

            <input type="submit" />
          </section>

          <section>
            <label htmlFor="owner">Benevole </label>
            <input
              id="owner"
              name="owner"
              type="owner"
              onChange={handleChange}
              required={true}
              value={formData.owner}
            />
          </section>
        </form>
      </div>
    </div>
  )
}

export default TicketPage