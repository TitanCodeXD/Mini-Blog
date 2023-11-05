import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

//Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'




function App() {


  return (
    <>
      <div>

        <BrowserRouter>

        <Navbar />

        <div className="container">
        <Routes>

          <Route path = "/" element = {<Home/>} />
          <Route path = "/about" element = {<About/>} />

        </Routes>
        </div>

        <Footer />
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
