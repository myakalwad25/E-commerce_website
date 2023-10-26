import { FaShoppingCart } from "react-icons/fa";
import { Bs1CircleFill } from "react-icons/bs";

import {nav} from './data.js'
import './Navbar.css';
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../App.js";
import { cart_list } from "./data.js";


function Navbar() {
    const {list, changelist} = useContext(userContext);
    const [count , setCount] = useState(list.length);
    const items = nav.map((item) => {
        return (
           <li key={item.key}><Link  to={item.link} >{item.name}</Link></li>
        )
    })
    
    useEffect(()=>{
        setCount(list.length);
    },[list])

    return (
        <div className="nav">
            <span className="nav_logo">
                logo
            </span>
            <ul className="nav_ul">
               
                {nav.map( (item)=>( 
                    <li key={item.key}>
                        <Link to={item.link}>{item.name}</Link>
                    </li>
                    
                ))}
               
            </ul>
            <div>
             <Link to="/cart">
                <div style={{position:"relative"}}>
                <FaShoppingCart style={{height:"2em", width:"2em"}}/>
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