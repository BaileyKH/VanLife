import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./server"

import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Vans } from './pages/Vans';
import { VanDetail } from './pages/VanDetail';

import './App.css'


function App() {


  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path='/vans/:id' element={<VanDetail />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
