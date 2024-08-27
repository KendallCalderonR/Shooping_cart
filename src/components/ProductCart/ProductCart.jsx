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
        <li id="product-item" >
            <article >
                <img src={'http://localhost:5173//src/img/'+ data.image}  alt={data.name} />
                <span className="name">{data.name}</span>
                <span className="price">{currencyFormatter.format(data.price)}</span>
                <button className="button" onClick={handleAddItemToCart}>Add to Cart</button>
            </article>
        </li>
    )
}

export {ProductCard}