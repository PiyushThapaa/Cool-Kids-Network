import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import toast from "react-hot-toast";
import validator from "validator"
import axios from "axios";

const Register = () => {
  const {setRecheck} = useContext(Context)
  const Navigate = useNavigate()

  const [email,setEmail] = useState("");
  const [firstName,setFirstname] = useState("");
  const [lastName,setLastname] = useState("");
  const [country,setCountry] = useState("");

  const registerHandler = async() => {
    if (email=="") {
      toast.error("Enter the Email")
      return
    }
    if (!validator.isEmail(email)) {
      toast.error("Enter a valid Email")
      return
    }
    await axios.get('https://randomuser.me/api/')
    .then(res=>{
      const result = res.data.results[0]
      setFirstname(result.name.first)
      setLastname(result.name.last)
      setCountry(result.location.country)
    })
    axios.post(`${import.meta.env.VITE_SERVER}/register`,{
      firstName,
      lastName,
      country,
      email
    },{
      withCredentials:true
    }).then((res)=>{
      toast.success(res.data.message)
      setRecheck(prev=>!prev)
      Navigate("/")
    }).catch(err=>{
      toast.error(err.response.data.message)
    })
  }
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
            value={email}
            style={styles.input}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <button style={styles.button} onClick={registerHandler}>Confirm</button>
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
      marginTop:"150px",
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
  