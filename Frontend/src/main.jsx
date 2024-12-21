import { createContext, StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'

export const Context = createContext()
// eslint-disable-next-line react-refresh/only-export-components
const AppWrapper = () => {
  const [recheck, setRecheck] = useState(false)
  const [role, setRole] = useState("")
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_SERVER}/me`,{
      withCredentials:true
    })
    .then((res)=>{
      setRole(res.data.user.role)
    })
    .catch((err)=>{
      console.log(err.response.data.message);
    })
  },[])
  return (
    <Context.Provider value={{ recheck, setRecheck, role, setRole }}>
      <App />
    </Context.Provider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)
