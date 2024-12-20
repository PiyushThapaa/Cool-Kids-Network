import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
          <Link to="/" style={styles.link}>My Data</Link>
          <Link to="/users-data" style={styles.link}>Users Data</Link>
    </header>
  );
};

const styles = {
  header: {
    width: "95%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 20px",
    paddingTop:'30px',
    fontFamily: "Arial, sans-serif",
  },
  link: {
    textDecoration: "none",
    color:"white",
    fontSize: "20px",
    fontWeight: "bold",
    border: '2px solid white',
    padding:'8px',
    borderRadius:'6px'
  }
};

export default Header;
