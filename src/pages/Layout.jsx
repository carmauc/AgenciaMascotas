import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Section1 from "../components/Section1"

const Layout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>

    </div>
  )
}

export default Layout