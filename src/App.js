import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => {
        console.log(error)
      })

  }, [])

  const filteredCountries = countries.filter(country => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase())
  })

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      find countries <input value={filter} onChange={handleFilterChange}/>
      <Countries countries={filteredCountries} />
    </div>
  )
}

export default App
