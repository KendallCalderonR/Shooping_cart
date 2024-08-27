import './App.css'
import Cart from './components/Cart/Cart.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import { ProductIndex } from './components/ProductIndex/ProductIndex.jsx';
import { CartContextProvider } from './store/CartContext.jsx';
import { UserProgressContextProvider } from './store/UserProgressContext.jsx';

function App() {

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header/>
        <ProductIndex />
        <Cart/>  
        <Footer/>
      </CartContextProvider>
    </UserProgressContextProvider>
  )
}

export default App
