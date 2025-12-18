import { Routes, Route, Link  } from "react-router-dom"
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import LoginPage from "./Pages/Login";


function App () {
  return (
    <>
      <nav >
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/login">Log In</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
};

export default App;