import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import toast from "react-hot-toast";
import validator from "validator"

const Login = () => {
  const {setRecheck} = useContext(Context)
  const Navigate = useNavigate()

  const [email,setEmail] = useState("");

  const loginHandler = () => {
    if (email=="") {
      toast.error("Enter the Email")
      return
    }
    if (!validator.isEmail(email)) {
      toast.error("Enter a valid Email")
      return
    }
    axios.post(`${import.meta.env.VITE_SERVER}/login`,{
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
        <h2 style={styles.subtitle}>Login</h2>
      </header>
      <div style={styles.formContainer}>
        <input
          type="email"
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        <button style={styles.button} onClick={loginHandler}>Confirm</button>
        <p style={styles.linkContainer}>
          Don’t have an account?{" "}
          <Link to={"/register"} style={styles.link}>Register Here</Link>
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

export default Login;
