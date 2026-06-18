import logo from "../assets/rc-03.jpg"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section style={{ position: "relative", padding: "80px", textAlign: "center" }}>

      <Link
        to="/weather"
        style={{
          position: "absolute",
          top: "480px",
          right: "80px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 14px",
          borderRadius: "8px",
          background: "rgba(116, 185, 255, 0.15)",
          color: "#74b9ff",
          textDecoration: "none",
          border: "1px solid rgba(116, 185, 255, 0.3)",
          transition: "transform 0.2s, background 0.2s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-3px)"
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(9, 132, 227, 0.5)"
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)"
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(9, 132, 227, 0.4)"
        }}
      >
        <span style={{ fontSize: "28px" }}>🌤️</span>
        <span style={{ fontSize: "14px", fontWeight: "600" }}>Weather</span>
        <span style={{ fontSize: "11px", opacity: 0.85 }}>Live updates</span>
      </Link>

      <img
        src={logo}
        alt="Profile Logo"
        style={{ width: "120px", borderRadius: "50%" }}
      />

      <h1>Randall Cher</h1>

      <h3>Software Engineer | AI Engineer | IoT Engineer</h3>

      <p>Digital Engineer in HTX</p>

    </section>
  )
}