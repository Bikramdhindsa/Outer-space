import './App.scss'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import 'leaflet/dist/leaflet.css';
import Spacex from './pages/Spacex.jsx'

function App() {

  return (
    <>
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/spacex' element={<Spacex />} />
      </Routes>

     </BrowserRouter>
    </>
  )
}

export default App
