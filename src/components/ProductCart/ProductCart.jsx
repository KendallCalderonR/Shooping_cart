import { useContext } from "react";
import "./ProductCart.css";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../util/formatting.js";



function ProductCard (data){
    const cartCtx = useContext(CartContext);

    function handleAddItemToCart (){
        cartCtx.addItem(data);
    }


    return(
        <li id="product-item">
            <article >
                <img src={'http://127.0.0.1:5173/src/img/'+ data.productImage}  alt={data.productName} />
                <span className="name">{data.productName}</span>
                <span className="price">{currencyFormatter.format(data.productPrice)}</span>
                <button className="button" onClick={handleAddItemToCart}>Add to Cart</button>
            </article>
        </li>
    )
}

export {ProductCard};