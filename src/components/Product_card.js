import { FaStar ,FaCartPlus} from "react-icons/fa";


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

function Product_card(props) {
    const product = props.item;
    return (
        <li className="product_card" key={product.key}>
            <div className="product_img"> <img src={product.img} alt="photo"></img></div>
            <div className="product_info">
                <p className="p1">{product.company}</p>
                <p className="p2">{product.type}</p>
                <p className="p3">${product.price}</p>
                <Star_patter/>  
                <div className="cart_icon"><FaCartPlus color={"rgb(14, 173, 185)"} size={'30px'}/></div>   
            </div>

        </li>
    ); 
}

export default Product_card;