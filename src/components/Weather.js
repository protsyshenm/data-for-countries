import axios from 'axios'
import { useState, useEffect } from 'react'

const Weather = ({ lat, lon }) => {
  const [weatherData, setWeatherData] = useState(null)

  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setWeatherData(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  if (weatherData === null) {
    return null
  } else {
    return (
      <div>
        <p>temperature {weatherData.current.temp} Celsius</p>
        <img src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}/>
        <p>wind {weatherData.current.wind_speed} m/s</p>
      </div>
    )
  }
}

export default Weather