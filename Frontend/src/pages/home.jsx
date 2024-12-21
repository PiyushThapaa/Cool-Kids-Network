import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import toast from "react-hot-toast";

const Home = () => {

  const Navigate = useNavigate()
  const {setRole,setRecheck} = useContext(Context)
  const [user,setUser] = useState({})
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_SERVER}/me`,{
      withCredentials:true
    })
    .then((res)=>{
      setUser(res.data.user);
      setRole(res.data.user.role)
    })
    .catch((err)=>{
      console.log(err.response.data.message);
      Navigate("/login");
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const logoutHandler = () => {
    axios.get(`${import.meta.env.VITE_SERVER}/logout`,{
      withCredentials:true
    }).then(()=>{
      toast.success("Logged Out Successfully")
      Navigate("/login")
      setRecheck(prev=>!prev)
    }).catch(err=>toast.error(err.response.data.message))
  }

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
      <button style={styles.logoutButton} onClick={logoutHandler}>Logout</button>
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
    height:0
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
