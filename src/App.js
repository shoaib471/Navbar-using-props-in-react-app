import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
function App() {
    return (
        <div>
            <Navbar title='BMJ' />
            <HeroSection/>
            <Footer />
        </div>
    )
}

export default App
