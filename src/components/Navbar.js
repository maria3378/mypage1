import React from "react";

const Navbar = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
};

const styles = {
  header: { background: "#333", color: "white", padding: "15px", textAlign: "center", position: "fixed", width: "100%", top: "0", left: "0" },
  nav: { display: "flex", justifyContent: "center", gap: "20px" },
  link: { color: "white", textDecoration: "none", fontSize: "18px" },
};

export default Navbar;
