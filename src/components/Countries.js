const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (countries.length === 1) {
    const country = countries[0]
    const languages = []
    for (const language in country.languages) {
      languages.push(country.languages[language])
    }
    console.log(country);
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
      </div>
    )
  } else {
    return (
      <div>
        {countries.map(country => <p key={country.name.common}>{country.name.common}</p>)}
      </div>
    )
  }
}

export default Countries