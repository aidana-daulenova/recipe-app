import { Routes, Route, Link  } from "react-router-dom"
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Signup from "./Pages/Signup";


function App () {
  return (
    <>
      {/* Навигация */}
      <nav >
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/signup">Signup</Link>
      </nav>

      {/* Роуты */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
};

export default App;