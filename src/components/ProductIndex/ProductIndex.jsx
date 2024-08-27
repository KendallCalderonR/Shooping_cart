import "./productIndex.css";
import data from "../DB.json";
import { ProductCard } from "../ProductCart/ProductCart.jsx";

function ProductIndex(){
    

    return(
        <>
            <div className="ProductIndex">
                <ul id="Product-index-items">
                    {
                        data.map((item) => {
                            return(
                            <ProductCard key= {item.id}
                                         id = {item.id}
                                         image = {item.image}
                                         name = {item.name}
                                         price = {item.price} />
                                         
                            )
                        })
                    }
                    
                </ul>

            </div>
        </>
    )
}

export {ProductIndex}