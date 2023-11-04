import { FaShoppingCart } from "react-icons/fa";

import {nav} from './data.js'
import './Navbar.css';
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../App.js";

function rotateCart() {
    
}

function Navbar() {
    const {list, changelist} = useContext(userContext);
    const [count , setCount] = useState(list.length);
    const [rotation, setRotation] = useState(0);
    const items = nav.map((item) => {
        return (
           <li key={item.key}><Link  to={item.link} >{item.name}</Link></li>
        )
    })
    
    
    useEffect(()=>{
        setRotation(rotation + 360);
    },[list])

    useEffect(()=>{
        setTimeout(() => {
            setCount(list.length);
        }, 500);
        
    },[list])

    return (
        <div className="nav">
            
                <img src="./Images/logo/png/cwb.png" className="nav_logo"></img>
           
            <ul className="nav_ul">
               
                {items}
               
            </ul>
            <div>
             <Link to="/cart">
                <div  className="cartSymbol"  style={{
            position:"relative",
           transition: 'transform 1s ease',
           transform: `rotateY(${rotation}deg)`,
           
        }}>
                    <FaShoppingCart style={{height:"2em", width:"2em",color:"black"}}/>
                    <div className="counter">
                        {count}
                    </div>
                </div>
             </Link>
            </div>
            
        </div>
    );
}

export default Navbar;