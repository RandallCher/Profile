import { useEffect, useState } from 'react'

export default function Weather() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=1.3521&longitude=103.8198&current_weather=true'
    )
      .then(res => res.json())
      .then(data => setWeather(data.current_weather))
  }, [])

  return (
    <div>
      <h1>Weather Page 🌤️</h1>

      {!weather ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Speed: {weather.windspeed} km/h</p>
          <p>Weather Code: {weather.weathercode}</p>
        </div>
      )}
    </div>
  )
}