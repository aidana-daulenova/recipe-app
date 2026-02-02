import { Routes, Route} from "react-router-dom"
import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup"
import Home from "./Pages/Home"
import ForgotPassword from "./Pages/ForgotPassword"
import ConfirmPassword from "./Pages/ConfirmPassword"
import Forum from "./Pages/Forum"
import Recipes from "./Pages/Recipes"
import AboutUs from "./Pages/AboutUs"

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about-us" element={<AboutUs />} />
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