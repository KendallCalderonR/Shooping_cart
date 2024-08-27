import "./productIndex.css";
import data from "../DB.json";
import { ProductCard } from "../ProductCart/ProductCart.jsx";

function ProductIndex(){
    

    return(
        <>
            <div className="ProductIndex">
                <ul id="Product-index-items">
                    {
                        data.map((product) => {
                            return(
                            <ProductCard key={product.productId}
                                         productId = {product.productId}
                                         productImage = {product.productImage}
                                         productName = {product.productName}
                                         productPrice = {product.productPrice} />
                            )
                        })
                    }
                    
                </ul>

            </div>
        </>
    )
}

export {ProductIndex}