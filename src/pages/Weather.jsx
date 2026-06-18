import { useEffect, useState } from 'react'

export default function Weather() {
  const [weather, setWeather] = useState(null)
  const [location, setLocation] = useState("Detecting...")
  const [coords, setCoords] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude
        const lon = pos.coords.longitude

        setCoords({ lat, lon })   // ✅ store lat/lon

        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        )
          .then(res => res.json())
          .then(data => setWeather(data.current_weather))

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
          )
          const data = await res.json()

          const addr = data.address

          setLocation(
            addr.suburb ||
            addr.city_district ||
            addr.neighbourhood ||
            addr.city ||
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

      {coords && (
        <p>
          Lat: {coords.lat.toFixed(5)} <br />
          Lon: {coords.lon.toFixed(5)}
        </p>
      )}

      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
    </div>
  )
}