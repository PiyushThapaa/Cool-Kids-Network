import { Link } from "react-router-dom";

const Register = () => {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Cool Kids Network</h1>
          <h2 style={styles.subtitle}>Register</h2>
        </header>
        <div style={styles.formContainer}>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
          />
          <button style={styles.button}>Confirm</button>
          <p style={styles.linkContainer}>
            Already have an account?{" "}
            <Link to={"/login"} style={styles.link}>Login Here</Link>
          </p>
        </div>
      </div>
    );
  };
  
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      textAlign: "center",
      marginBottom: "2rem",
    },
    title: {
      fontSize: "2.4rem",
      color: "#fff",
      margin: 0,
    },
    subtitle: {
      fontSize: "1.2rem",
      color: "#f8f9fa",
    },
    formContainer: {
      background: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "300px",
    },
    input: {
      width: "93%",
      padding: "10px",
      marginBottom: "1rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "1rem",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#66a6ff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
    },
    buttonHover: {
      backgroundColor: "#578bd0",
    },
    linkContainer: {
      marginTop: "1rem",
      fontSize: "0.9rem",
      color: "#555",
    },
    link: {
      color: "#66a6ff",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };
  
  export default Register;
  