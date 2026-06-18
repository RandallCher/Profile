import { useEffect, useState } from 'react'

export default function Weather() {
  const [weather, setWeather] = useState(null)
  const [location, setLocation] = useState("Detecting...")

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude
        const lon = pos.coords.longitude

        setLocation("Your current location")

        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        )
          .then(res => res.json())
          .then(data => setWeather(data.current_weather))
      },
      (err) => {
        console.error(err)
        setLocation("Location access denied (default: Singapore)")

        // fallback to Singapore if user denies permission
        fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=1.3521&longitude=103.8198&current_weather=true'
        )
          .then(res => res.json())
          .then(data => setWeather(data.current_weather))
      }
    )
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
          <p>Location: {location}</p>
        </div>
      )}
    </div>
  )
}