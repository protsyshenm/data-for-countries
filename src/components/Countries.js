const Countries = ({ countries, showOne }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (countries.length === 1) {
    const country = countries[0]
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
      </div>
    )
  } else {
    return (
      <div>
        {countries.map(country => {
          return (
            <>
              <p key={country.name.common}>{country.name.common}</p>
              <button onClick={() => showOne(country.name.common)}>show</button>
            </>
          )
        })}
      </div>
    )
  }
}

export default Countries