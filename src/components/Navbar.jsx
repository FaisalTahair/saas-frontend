import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>SaaS App</h1>
      <div>
        <button style={styles.button}>Login</button>
        <button style={styles.button}>Sign Up</button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#282c34",
    color: "white",
  },
  logo: { fontSize: "24px", fontWeight: "bold" },
  button: {
    marginLeft: "10px",
    padding: "8px 16px",
    backgroundColor: "#61dafb",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Navbar;
