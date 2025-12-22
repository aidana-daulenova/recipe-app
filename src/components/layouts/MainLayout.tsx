import { Outlet } from "react-router-dom"
import TopBar from "@/components/TopBar"
import MainMenu from "@/components/MainMenu"

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