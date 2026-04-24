import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/index.js"
import Login from "./pages/Login/index.js"
import Feed from "./pages/Feed/index.js"
import Register from "./pages/Register/index.js"
import { AuthContextProvider } from "./context/auth.js"

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Register />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
