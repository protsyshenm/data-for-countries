import Weather from './Weather'

const Country = ({ country }) => {
  const lat = country.capitalInfo.latlng[0]
  const lon = country.capitalInfo.latlng[1]
  const languages = []
  for (const language in country.languages) {
    languages.push(country.languages[language])
  }
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <p><b>languages:</b></p>
      <ul>
        {languages.map(language => <li key={language}>{language}</li>)}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt}/>
      <h2>Weather in {country.capital}</h2>
      <Weather lat={lat} lon={lon}/>
    </div>
  )
}

export default Country