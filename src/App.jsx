import About from './About'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Menu from './Menu'
import LandingPage from './LandingPage'
import { Routes, Route } from 'react-router-dom'
import Edit from './Edit'

function App() {
  return (
    <>
  <Header/>
      <Routes>       
        <Route path="/" element={<LandingPage />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        
      </Routes>
      <About/>
      <Footer/>
    </>
  )
}

export default App
