
import { cart_list } from "./data";
import { useEffect, useState } from "react";
import {MdOutlineCancel} from "react-icons/md";
import './Cart.css'

export default function Cart() {
    const [list, setList] = useState(cart_list);
    const [total, setTotal] = useState(0);
    const [num , setNum] = useState(list.length);

    const handleCross = (item)=>{
        let val = 0;
        let val2 = 0;
        setList( list.filter(ele=>{
            if(ele.key!=item.key) 
            {
                val+= ele.price;
                val2++;
                return ele;
            }
            
            
        }))
        setTotal(val);
        setNum(val2);
    }

    
    return (
    <> 
        
       <div className="list_container">
            <div className="list_item" >
                <div>{"Items Images"}</div>
                <div>{"Items Name"}</div>
                <div>{"Items quantity"}</div>
                <div>{"Items Price"}</div>
                <div></div>
            </div>
            {
                list.map((item)=>{
                return(
                <div className="list_item" key={item.key}>
                        <img src={item.img} alt="product_img"></img>
                        <h3>{item.type}</h3>
                        <div>{item.quantity}</div>
                        <div>{item.price*item.quantity}</div>
                        <div className="cross" onClick={evn => handleCross(item)}><MdOutlineCancel size={"30px"}/> </div>
                        
                    </div>
                )
                })
            }
            <div className="list_item">
                <div><b>{"Total items : "}{num}</b></div>
                <div><b>{"Total Price : "}{total}</b></div>
            </div>
       </div>

    </>
    );
}