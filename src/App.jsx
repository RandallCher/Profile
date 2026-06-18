import { Routes, Route, Navigate } from 'react-router-dom'
import Hero from './pages/Hero'
import Weather from './pages/Weather'

export default function App() {
  return (
    <div>
      <Routes>
        {/* Default landing page */}
        <Route path="/" element={<Hero />} />

        {/* Weather page */}
        <Route path="/Weather" element={<Weather />} />

        {/* Safety fallback (optional but recommended) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}