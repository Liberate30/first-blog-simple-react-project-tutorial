import './App.css'
import Navbar from './Components/navbar/Navbar'
import Home from './Components/home/Home'
import Footer from './Components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import { useState } from 'react'
import Posts from './pages/posts/Posts'
import About from './pages/about/About'
import './app.css'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login loginState={[isLoggedIn, setIsLoggedIn]} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
