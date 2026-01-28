import { Routes, Route} from "react-router-dom"
import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup"
import Home from "./Pages/Home"
import ForgotPassword from "./Pages/ForgotPassword"
import ConfirmPassword from "./Pages/ConfirmPassword"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/confirm-password" element={<ConfirmPassword />}></Route>
      </Route>
    </Routes>
  )
};

export default App;