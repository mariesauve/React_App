/* eslint-disable react/jsx-no-undef */
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import './App.css';
import {Container} from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Store from './pages/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import './pages/Pages.css';
import Gallery from './pages/Gallery';
import CartProvider from './CartContext';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
    <><CartProvider>
      <Container>
      <Header/>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path='success' element={<Success />} />
            <Route path='cancel' element={<Cancel />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
          </Routes>
        </BrowserRouter>

      </Container>
    </CartProvider>
    <Footer />
    </>
  );
}

export default App;
