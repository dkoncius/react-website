import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { HomeObjOne1, HomeObjOne2, HomeObjOne3 } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
   <>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
     <Navbar toggle={toggle}/>
     <HeroSection/>
      <InfoSection {...HomeObjOne1}/>
      <InfoSection {...HomeObjOne2}/>
      <Services/>
      <InfoSection {...HomeObjOne3}/>
      <Footer/>
   </>
  )
}

export default Home