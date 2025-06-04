import AreaOfExpertise from "./components/AreaOfExpertise"
import CarrierCollaboration from "./components/CarrierCollaboration"
import Contact from "./components/Contact"
import FilterMenu from "./components/FilterMenu"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import OwnerSection from "./components/OwnerSection"
import Services from "./components/Services"
import Statistics from "./components/Statistics"
import Testimonials from "./components/Testimonials"
import VisionMission from "./components/VisionMission"

import whatsApp_icon from "../src/assets/Images/Icons/whatsapp_icon.png"
import { redirectToWhatsApp } from "./Content/Data"

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="px-10 sm:px-16 lg:px-20 z-20 space-y-20">
        <HeroSection />
        <Statistics />
        <AreaOfExpertise />
        <Services />
        <FilterMenu />
        <OwnerSection />
        <VisionMission />
        <CarrierCollaboration />
        <Testimonials />
        <Contact />


        <a
          onClick={redirectToWhatsApp}
          href="#"
          target="_blank"
          title="Contact directly on WhatsApp">
          <img
            src={whatsApp_icon}
            alt="WhatsApp Icon"
            className="w-15 fixed z-50 top-11/13 right-10 hover:scale-105 active:scale-98 brightness-110"
          />
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default App