import { FaStar ,FaCartPlus} from "react-icons/fa";
import { cart_list } from "./data";
import { useState ,useContext, useEffect} from "react";
import { userContext } from "../App";

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
    //const [cartList, setCartlist] = useState(cart_list)
    const {list,changelist} = useContext(userContext);
    const product = props.item;
    // console.log(product);
    
    const handleCart = (item)=>{
        // add_item(item);
       console.log(`item added ${item.key}`);
       const new_list = [...list,item];
       changelist(new_list);
       console.log(`total item are ${list.length+1}`);
       
   }
   
    return (
        <li className="product_card" key={product.key}>
            <div className="product_img"> <img src={product.img} alt="photo"></img></div>
            <div className="product_info">
                <p className="p1">{product.company}</p>
                <p className="p2">{product.type}</p>
                <p className="p3">${product.price}</p>
                <Star_patter/>  
                <div className="cart_icon" onClick={()=>handleCart(product)}><FaCartPlus color={"rgb(14, 173, 185)"} size={'30px'}/></div>   
            </div>

        </li>
    ); 
}

export default ProductCard;