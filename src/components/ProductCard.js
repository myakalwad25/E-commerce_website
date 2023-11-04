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
        
       let flag = 0;
       let new_list = list.map(ele=>{
            if(ele.key === item.key) {
                flag = 1;
                ele.quantity = ele.quantity+1;
            }
            return ele;
       })
       if(flag==0) {
        new_list = [...new_list,item];
       }
       
       
       console.log(`item added ${item.key}`);
       console.log(`total item are ${new_list.length}`);
       changelist(new_list);
       
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