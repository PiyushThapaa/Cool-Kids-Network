const Home = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    country: "USA",
    email: "johndoe@example.com",
    role: "Administrator",
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.cardTitle}>My Data</h1>
        <hr />
        <div style={styles.cardContent}>
          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Last Name:</strong> {user.lastName}</p>
          <p><strong>Country:</strong> {user.country}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      </div>
      <button style={styles.logoutButton}>Logout</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection:"column",
    gap:'17px',
    marginTop:'56px',
    alignItems: "center",
    height: "80vh"
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "400px",
    textAlign: "center",
  },
  cardTitle: {
    color:"black",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  cardContent: {
    fontSize: "24px",
    color: "#555",
  },
  logoutButton: {
    padding: "5px 10px",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "bold",
    color: "white"
  },
};

export default Home;
