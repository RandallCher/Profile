import { useEffect, useState } from 'react'

export default function Weather() {
  const [weather, setWeather] = useState(null)
  const [location, setLocation] = useState("Detecting...")

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude
        const lon = pos.coords.longitude

        // 1. Get weather
        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        )
          .then(res => res.json())
          .then(data => setWeather(data.current_weather))

        // 2. Get real location name (reverse geocode)
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
          )
          const data = await res.json()

          setLocation(
            data.address.city ||
            data.address.town ||
            data.address.suburb ||
            data.address.county ||
            "Unknown location"
          )
        } catch (err) {
          console.error(err)
          setLocation("Location unavailable")
        }
      },
      (err) => {
        console.error(err)
        setLocation("Permission denied")
      }
    )
  }, [])

  if (!weather) return <p>Loading...</p>

  return (
    <div>
      <h1>Weather Page 🌤️</h1>

      <p>Location: {location}</p>

      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
      <p>deployment successful</p>
    </div>
  )
}