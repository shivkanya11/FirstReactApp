import "./Navbar.css";
import {Link} from 'react-router-dom'
export default function Navbar()
{
    return(
        <div className="nav">
            <h2 className="name">Shivkanya Mhetre</h2>
            <Link to = "/home" className="menu-item">Home</Link>
            <Link to = "/about" className="menu-item">About</Link>
            <Link to = "/contact" className="menu-item">Contact</Link>
        </div>
    )
}