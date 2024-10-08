import { useContext } from 'react';
import './cart.css';
import CartContext from '../../store/CartContext';
import UserProgressContext from '../../store/UserProgressContext.jsx';
import Modal from '../Modal/Modal';
import CartItem from '../CartItem/CartItem.jsx';
import { currencyFormatter } from "../../util/formatting.js";

export default function Cart(){
    const cartCtx = useContext(CartContext);
    const  userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleCloseCart (){
        userProgressCtx.hideCart();
    }

    return (
    <Modal className="cart" open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map(item => (
                <CartItem 
                key={item.id} 
                name={item.name}
                quantity={item.quantity} 
                price={item.price} 
                onIncrease={() => cartCtx.addItem(item)} 
                onDecrease={() => cartCtx.removeItem(item.id)}/>
            ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <button className='cart-close' onClick={handleCloseCart} > Close</button>
        </p>
    </Modal>
    );
}