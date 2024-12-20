import UserData from "../components/userdata"

const UserDataList = () => {
  return (
    <>
    <center><h1>Users List</h1></center>
    <div style={styles}>
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
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