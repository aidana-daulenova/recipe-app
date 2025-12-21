import { Outlet } from "react-router-dom"
import TopBar from "@/site components/TopBar"
import MainMenu from "@/site components/MainMenu"

function MainLayout() {
  return (
    <>
      <TopBar />
      <MainMenu />
      <Outlet />
    </>
  )
}

export default MainLayout