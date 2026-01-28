import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='navbar'>

            <ul className='nav-links'>
                <li><a href='/'>Home</a></li>
                <li><a href='/shop'>Products</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li className='cart'><a href='/cart'>Cart</a></li>
            </ul>
        </nav>
    );
}
export default Navbar