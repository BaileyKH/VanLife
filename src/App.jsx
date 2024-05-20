import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./server"

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Vans } from './pages/Vans/Vans';
import { VanDetail } from './pages/Vans/VanDetail';

import './App.css'


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/vans" element={<Vans />}/>
            <Route path='/vans/:id' element={<VanDetail />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
