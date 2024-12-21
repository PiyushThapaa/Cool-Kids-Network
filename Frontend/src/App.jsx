import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import { Toaster } from "react-hot-toast"
import Register from "./pages/register"
import Header from "./components/header"
import Home from "./pages/home"
import NotFound from "./pages/notfound"
import UserDataList from "./pages/userdatalist"
import { useContext, useEffect, useState } from "react"
import { Context } from "./main"

const App = () => {
  const {role,recheck} = useContext(Context)
  const [headerShow,setHeaderShow] = useState()
  useEffect(()=>{
    const appState = () => {
      if ((window.location.pathname.endsWith('/login')||(window.location.pathname.endsWith('/register')))) {
        setHeaderShow(false)
      } else {
        setHeaderShow(true)
      }
    }
    appState()
    // window.addEventListener('popstate',appState)
    //   return () => {
    //     window.removeEventListener('popstate', appState);
    //   };
  },[recheck])
  return (
    <>
      <Toaster />
      <Router>
      {headerShow? ((role=="Coolest Kid" || role=="Cooler Kid") ? <Header /> : null) : null}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/users-data" element={<UserDataList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App