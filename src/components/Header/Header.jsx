import "./Header.css";
import { IoCartOutline  } from "react-icons/io5";
import logo from '.././img/Raw_etc.png';
import { useContext } from "react";
import CartContext from "../../store/CartContext.jsx";
import UserProgressContext from "../../store/UserProgressContext.jsx";


export default function Header(){

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart(){
        userProgressCtx.showCart();
    }

    return(
        <>
            <div className="top-BlackLine"></div>
            <header id="main-header">
            
            <div className="header-buttons">
                <div className="top-logo">
                    <img src={logo} alt="RAW ETC logo" />
                </div>
                <nav className="nav-icon">
                    <button onClick={handleShowCart}>
                    <IoCartOutline className="icon"></IoCartOutline>
                    <span className="nav-icon-items">({totalCartItems})</span>
                    </button>
                </nav>
            </div>
            
        </header>
        </>
        
    );
}