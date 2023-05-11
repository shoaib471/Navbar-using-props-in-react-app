import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Main from "./Components/Main";
import {Routes,Route } from "react-router-dom";
import Catogary from './Components/Catogary';
import Contact from './Components/Contact'
import Services from './Components/Services'
function App() {
    return (
        <>
           <Navbar title="shoaib"/>
           <Routes>
             <Route path='/Main' element={<Main />}/>
             <Route path='/Catogary' element={<Catogary/>}/>
             <Route path='/Services' element={<Services/>}/>
             <Route path='/Contact' element={<Contact />}/>
        </Routes>
        <Footer/>
        </>
    )
}

export default App
