import { useContext, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const UserData = ({sno,firstName,lastName,country,email,userRole,id}) => {

  const {role} = useContext(Context)
  const [changeRoleTo, setChangeRoleTo] = useState(userRole)
  const handleRoleChange = (e) => {
    setChangeRoleTo(e.target.value)
      axios.put(`${import.meta.env.VITE_SERVER}/changerole`,{
        changeRoleTo:e.target.value,
        id
      },{
        withCredentials:true
      })
      .then((res)=>{
        toast.success(res.data.message)
      })
      .catch((err)=>{
        toast.error(err.response.data.message);
      })
  }
    return (
      <div style={styles.container}>
        <div style={styles.card}>
            <h1 style={styles.header}>User {sno}</h1>
            <hr />
          <div style={styles.cardContent}>
            <p><strong>First Name:</strong> {firstName}</p>
            <p><strong>Last Name:</strong> {lastName}</p>
            <p><strong>Country:</strong> {country}</p>
            {role=="Coolest Kid" ? <p><strong>Email:</strong> {email}</p> : null}
            {role=="Coolest Kid" ? <p><strong>Role:</strong>
            <select
              value={changeRoleTo}
              onChange={e=>handleRoleChange(e)}
              style={styles.select}
            >
              <option value="Cool Kid">Cool Kid</option>
              <option value="Cooler Kid">Cooler Kid</option>
              <option value="Coolest Kid">Coolest Kid</option>
            </select>
            </p> : null}
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
  