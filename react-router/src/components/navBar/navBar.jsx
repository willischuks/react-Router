import { NavLink } from "react-router-dom";
import './navBar.css';

const NavBar =()=>{
    return(
        <nav className="nav">
            <ul>
            <li><NavLink to ='/'>Home</NavLink></li>
            <li><NavLink to ='/reviews'>Reviews</NavLink></li>
            <li><NavLink to ='/account'>Account</NavLink></li>
            </ul>
        </nav>
    )
} 

export default NavBar