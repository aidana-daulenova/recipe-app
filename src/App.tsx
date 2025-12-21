import { Routes, Route} from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";


function App () {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
};

export default App;