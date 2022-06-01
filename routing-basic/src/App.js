// import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Products from './components/Products'
import Product from './components/Product';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<Product/>} />
      <Route path="*" element={<NotFound/>} />

     </Routes>
    </div>
  );
}

export default App;
