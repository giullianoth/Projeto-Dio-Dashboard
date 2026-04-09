import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Feed from "./pages/Feed"
import Register from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
