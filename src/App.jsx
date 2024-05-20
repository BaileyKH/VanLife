import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Vans } from './pages/Vans';
import { Nav } from './components/Nav';

function App() {


  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/vans" element={<Vans />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
