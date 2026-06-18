import logo from "../assets/rc-03.jpg"

export default function Hero() {
  return (
    <section style={{ padding: "80px", textAlign: "center" }}>
      
      <img 
        src={logo} 
        alt="Profile Logo" 
        style={{ width: "120px", borderRadius: "50%" }} 
      />

      <h1>Randall Cher</h1>

      <h3>Software Engineer | AI Engineer | IoT Engineer</h3>

      <p>
        Digital Engineer in HTX
      </p>

    </section>
  )
}