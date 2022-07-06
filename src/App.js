
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import Detail from './component/Detail';
import Cart from './component/Cart';
import {

  Routes,
  Route,
}  from 'react-router-dom';

function App() {
  return (
    <div>
        <Navbar />
     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products/>} />
          <Route path='/products/:id' element={<Product/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      


    </div>
  );
}

export default App;
