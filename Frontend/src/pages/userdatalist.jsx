import { useEffect, useState } from "react"
import UserData from "../components/userdata"
import axios from "axios"
import toast from "react-hot-toast"

const UserDataList = () => {
  const [allusers, setAllusers] = useState([])
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_SERVER}/allusers`,{
      withCredentials:true
    }).then(res=>{
      setAllusers(res.data.data)
    }).catch(err=>toast.error(err.response.data.message))
  },[])
  return (
    <>
    <center><h1>Users List</h1></center>
    <div style={styles}>
      {allusers.map((user,index)=>{
        return(
          <UserData sno={index+1} firstName={user.firstName} lastName={user.lastName} country={user.country} email={user.email} userRole={user.role} id={user._id} key={index} />
        )
      })}
    </div>
    </>
  )
}

const styles = {
    display:'flex',
    gap:'12px',
    flexWrap:'wrap',
    justifyContent:'center',
    paddingTop:'22px',
    paddingBottom:'22px',
    height:'100%'
}

export default UserDataList