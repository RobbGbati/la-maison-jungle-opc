import '../App.css';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react';

function App() {
  const localCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(localCart ?  JSON.parse(localCart) : []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div className="App">
      <Banner>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
