import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Carrusel3 from "../components/Carrusel3"
import Carousel from "../components/Testimonios"
import Carousel2 from "../components/Testimonio"
import Testimonios from "../components/Testimonios"
import Estadisticas from "../components/Estadisticas"
import Precios from "../components/Precios"
import Stats from "../components/Stats"
import Logos from "../components/Logos"
import Pasos from "../components/Pasos"

const Index = () => {
  return (
    <div className=" overflow-hidden">
        <HeroSection/>
        <Carrusel3/>
        <Pasos/>
        <Precios/>
        <Stats/>
        <Testimonios/>
        <Logos/>
        <Footer/>
    </div>
  )
}

export default Index