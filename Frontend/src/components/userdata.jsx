const UserData = () => {
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
            <h1 style={styles.header}>User 1</h1>
            <hr />
          <div style={styles.cardContent}>
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Country:</strong> {user.country}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> 
            <select
            //   value={role}
            //   onChange={handleRoleChange}
              style={styles.select}
            >
              <option value="cool kid">Cool Kid</option>
              <option value="cooler kid">Cooler Kid</option>
              <option value="coolest kid">Coolest Kid</option>
            </select>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "400px",
      textAlign: "center",
    },
    header:{
        color:'black'
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
    select: {
        padding: "5px",
        fontSize: "16px",
        width: "60%",
        borderRadius: "4px",
        border: "1px solid #ccc",
      },
  };
  
  export default UserData;
  