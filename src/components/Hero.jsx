import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
        {/*bg glow lyr */}
        <div className="hero-glow"></div>

      <p className="badge">Hello, I'm</p>

      <h1 className="hero-name">
        Neetu Pathak
        </h1>
      

      <h2 className="hero-role">
        B.Tech Computer Science Student
      </h2>

      <p className="hero-subtitle">
        Full-Stack Development & AI Enthusiast
      </p>

      <p className="hero-desc">
        Turning ideas into web applications.
      </p>

      <div className="hero-actions">
        <button
          className="primary-btn"
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          View Projects
        </button>
      </div>
    </motion.section>
  );
}

export default Hero;