import { FaStar ,FaCartPlus} from "react-icons/fa";
import { cart_list } from "./data";
import { useState } from "react";

function Star_patter() {
    
    return (
        <>
            <FaStar color={"gold"} size={"20px"}/>
            <FaStar color={"gold"} size={"20px"}/>
            <FaStar color={"gold"} size={"20px"}/>
            <FaStar color={"gold"} size={"20px"}/>
            <FaStar color={"gold"} size={"20px"}/>
        </>
    );
}


function ProductCard(props) {
    const [cartList, setCartlist] = useState(cart_list)
    const product = props.item;

    const handleCart = (item)=>{
        cartList.push(item);
        alert("item added")
   }
   
    return (
        <li className="product_card" key={product.key}>
            <div className="product_img"> <img src={product.img} alt="photo"></img></div>
            <div className="product_info">
                <p className="p1">{product.company}</p>
                <p className="p2">{product.type}</p>
                <p className="p3">${product.price}</p>
                <Star_patter/>  
                <div className="cart_icon" onClick={eve=>handleCart(product)}><FaCartPlus color={"rgb(14, 173, 185)"} size={'30px'}/></div>   
            </div>

        </li>
    ); 
}

export default ProductCard;