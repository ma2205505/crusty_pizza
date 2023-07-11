import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import OrderNow from './components/OrderNow';
import Contact from './components/Contact';
import Flavours from './Flavours';

function App() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Order Now' element={<OrderNow />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Flavours' element={<Flavours />} />

      </Routes>
    </>
  )
}

export default App;
