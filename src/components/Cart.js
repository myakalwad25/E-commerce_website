
import { cart_list } from "./data";
import {  useState,useContext, useEffect } from "react";
import { userContext } from "../App";
import {RiDeleteBin5Fill} from "react-icons/ri";
import './Cart.css'



export default function Cart() {
    
    const {list,changelist} = useContext(userContext);
    const [len,setLen] = useState(list.length);
    const [cost,setCost] = useState(198);

    useEffect(()=>{
        setLen(list.length);
        setCost(new_cost)
    },[list]);

    function handleinc(item) {
        // alert(`item incremented`);
        let incr_list = list.map((ele)=> {
            if(ele.key === item.key) {
                ele.quantity = ele.quantity+1;
                console.log(`ele.key increased to ${ele.key}`);
                return ele;
            }
            else return ele;
        })

        changelist(incr_list);
        
    }
    function handledec(item){
        let decr_list = list.map((ele)=> {
            if(ele.key === item.key && ele.quantity!==0) {
                ele.quantity = ele.quantity-1;
                console.log(`ele.key decresed to ${ele.key}`);
                return ele;
            }
            else return ele;
        })

        changelist(decr_list);
    }

    const new_list = list;
    //console.log(list);
    const handleCross = (item)=>{
        let newList = list.filter(ele=>{
            if(ele.key !== item.key) 
            {        
                return ele;
            }  
            else {
                console.log(`item_id:${item.key} removed`);
            }    
        });

        changelist(newList)

    }
    
    console.log(`total item ${list.length}`);
    // console.log("vijay");
    // console.log(list);
    let new_cost = 0;
    let  prodcuts_list = new_list.map((item)=>{
         new_cost += (item.quantity*item.price);
        return(
            <div className="list_item" key={item.key}>
                    <img src={item.img} alt="product_img"></img>
                    <h3>{item.type}</h3>
                    <div> 
                        <button onClick={()=>handledec(item)}>{"-"}</button>
                            {item.quantity}
                        <button onClick={()=> handleinc(item)}>{"+"}</button></div>
                    <div>{item.price*item.quantity}</div>
                    <div className="cross" onClick={evn => handleCross(item)}><RiDeleteBin5Fill size={"25px"}/> </div>
                    
                </div>
            )
        })
   
    return (
    <> 
        
       <div className="list_container">
            <div className="list_item" style={{marginBottom:"20px"}}>
                <div>{"Items Images"}</div>
                <div>{"Items Name"}</div>
                <div>{"Items quantity"}</div>
                <div style={{marginRight:"70px"}}>{"Items Price"}</div>

            </div>
            {
                prodcuts_list
            }
            <div className="list_item" style={{marginTop:"20px"}}>
                <div><b>{"Total items : "}{len}</b></div>
                <div><b>{`Total Price : $${cost}`}</b></div>
            </div>
       </div>

    </>
    );
}