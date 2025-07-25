export default function LandingPage() {
    return (
      <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: "'Orbitron', sans-serif", textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ fontSize: "3rem", color: "#0ff", textShadow: "0 0 5px #0ff, 0 0 15px #0ff, 0 0 30px #0ff" }}>
          AI Mentor for Banking Exams
        </h1>
        <p style={{ color: "#ccc", fontSize: "1.2rem", margin: "20px 0" }}>
          Master mindset. Build strategy. Crack every concept with AI-powered teaching.
        </p>
        <button style={{
          padding: "15px 30px",
          fontSize: "1.1rem",
          backgroundColor: "transparent",
          border: "2px solid #f0f",
          color: "#f0f",
          borderRadius: "10px",
          textShadow: "0 0 5px #f0f",
          cursor: "pointer"
        }}>
          Start Learning
        </button>
      </div>
    );
  }
  