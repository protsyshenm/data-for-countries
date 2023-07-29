import Country from './Country'

const Countries = ({ countries, showOne }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (countries.length === 1) {
    const country = countries[0]
    return <Country country={country} />
  } else {
    return (
      <>
        {countries.map(country => {
          return (
            <div key={country.name.common}>
              <p>{country.name.common}</p>
              <button onClick={() => showOne(country.name.common)}>show</button>
            </div>
          )
        })}
      </>
    )
  }
}

export default Countries