import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./server"

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Vans } from './pages/Vans/Vans';
import { VanDetail } from './pages/Vans/VanDetail';
import { Dashboard } from './pages/Hosts/Dashboard';
import { Income } from './pages/Hosts/Income';
import { Reviews } from './pages/Hosts/Reviews';

import './App.css'
import { HostLayout } from './components/HostLayout';
import { HostVans } from './pages/Hosts/HostVans';
import { HostVanDetail } from './pages/Hosts/HostVanDetail';



function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="vans" element={<Vans />}/>
            <Route path='vans/:id' element={<VanDetail />}/>
            
            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Dashboard />}/>
              <Route path="income" element={<Income />}/>
              <Route path="vans" element={<HostVans />}/>
              <Route path="vans/:id" element={<HostVanDetail />}/>
              <Route path="reviews" element={<Reviews />}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
