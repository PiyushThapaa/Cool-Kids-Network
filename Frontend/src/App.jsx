import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Header from "./components/header"
import Home from "./pages/home"
import NotFound from "./pages/notfound"
import UserDataList from "./pages/userdatalist"

const App = () => {
  return (
    <>
      <Router>
      <Header />
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