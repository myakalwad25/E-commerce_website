import { FaShoppingCart } from "react-icons/fa";
import {nav} from './data.js'
import './Navbar.css';
import { Link } from "react-router-dom";


function Navbar() {
    const items = nav.map((item) => {
        return (
           <li key={item.key}><Link  to={item.link} >{item.name}</Link></li>
        )
    })
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
             <Link to="/cart"><FaShoppingCart style={{height:"1.5em", width:"1.5em"}}/></Link>
            </div>
            
        </div>
    );
}

export default Navbar;