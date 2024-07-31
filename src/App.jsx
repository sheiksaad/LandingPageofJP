import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import TrainingSec from './Components/TrainingSec'
import Section5 from './Components/Section5'
import Section6 from './Components/Section6'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Section1/>
    <Section2/>
    <Section3/>
    <TrainingSec/>
    <Section5/>
    <Section6/>
    <Footer/>
    </>
  )
}

export default App