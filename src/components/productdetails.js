// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { products_list } from './data';
import { cart_list } from "./data";
import { FaStar ,FaCartPlus} from "react-icons/fa";
import { useState ,useContext, useEffect} from "react";
import { userContext } from "../App";
import { Link } from "react-router-dom";


function Star_patter(color, size) {
    
  return (
      <>
          <FaStar color={"gold"} size={"30px"}/>
          <FaStar color={"gold"} size={"30px"}/>
          <FaStar color={"gold"} size={"30px"}/>
          <FaStar color={"gold"} size={"30px"}/>
          <FaStar color={"gold"} size={"30px"}/>
      </>
  );
}

const btn_style = {
  margin: "0px 10px",
  backgroundColor:" rgb(14, 173, 185)",
  color: "white",
  outline: "none",
  border: "1px solid black",
  width: "30px",
  fontSize:" 30px",
  textAlign: "center",
  borderRadius:" 4px"

    
}


const ProductDetail = ( ) => {
  const { id } = useParams();
  const product = products_list.find((p) => p.key === parseInt(id,10));
  const {list,changelist} = useContext(userContext);
  

  
 const [quan , setQuan] = useState(1);
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleCart = (item,quan)=>{
        
    let flag = 0;
    let new_list = list.map(ele=>{
         if(ele.key === item.key) {
             flag = 1;
             ele.quantity = ele.quantity+quan;
         }
         return ele;
    })
    if(flag===0) {
     new_list = [...new_list,{...item,quantity:quan}];
    }
    
    
    console.log(`item added ${item.key}`);
    console.log(`total item are ${new_list.length}`);
    changelist(new_list);
    
    }

  return (
    <div className='prod'>
      
       <div className='imgdiv'><img src={product.img} alt='product photo'></img></div>
        <div className='prod_info'>
        <h1 style={{textAlign:"center "}}>Product Information</h1>
            <p>Code of product : <b>{product.code}</b></p>
            <p>Type of product : <b>{product.type}</b></p>
            <p>Company of product : <b>{product.company}</b></p>
            <p>Review : <b><Star_patter  /></b></p>
            <p>quantity :  
            <span>
              <span>
                <button onClick={()=>{ setQuan(quan-1)}} style={btn_style}>{"-"}</button>
                            {` ${quan} `}
                <button onClick={()=> { setQuan(quan+1)}} style={btn_style}>{"+"}</button>
              </span>
            </span>
            </p>
            <div className="cart_icon" onClick={()=>handleCart(product,quan)}><FaCartPlus color={"rgb(14, 173, 185)"} size={'60px'} style={{margin:"10px"}} /></div> 
        </div>
    </div>
  );
};

export default ProductDetail;
