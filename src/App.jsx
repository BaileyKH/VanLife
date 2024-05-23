import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./server"

import { Layout } from './components/Layout';
import { HostLayout } from './components/HostLayout';

import { Home } from './pages/Home';
import { About } from './pages/About';

import { Vans } from './pages/Vans/Vans';
import { VanDetail } from './pages/Vans/VanDetail';

import { Dashboard } from './pages/Hosts/Dashboard';
import { Income } from './pages/Hosts/Income';
import { Reviews } from './pages/Hosts/Reviews';
import { HostVans } from './pages/Hosts/HostVans';
import { HostVanDetail } from './pages/Hosts/HostVanDetail';
import { HostPricing } from './pages/Hosts/HostPricing';
import { HostPhoto } from './pages/Hosts/HostPhoto';
import { HostInfo } from './pages/Hosts/HostInfo';

import { NotFound } from './pages/NotFound';

import './App.css'
import { Login } from './pages/Login';
import { AuthRequired } from './components/AuthRequired';




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
            <Route path="login" element={<Login />} />

            <Route element={<AuthRequired />}>
              <Route path="/host" element={<HostLayout />}>
                <Route index element={<Dashboard />}/>
                <Route path="income" element={<Income />}/>
                <Route path="vans" element={<HostVans />}/>
                <Route path="reviews" element={<Reviews />}/>
                <Route path="vans/:id" element={<HostVanDetail />}>
                  <Route index element={<HostInfo />} />
                  <Route path="pricing" element={<HostPricing />}/>
                  <Route path="photos" element={<HostPhoto />}/>
                </Route>
              </Route>
            </Route>
            
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

