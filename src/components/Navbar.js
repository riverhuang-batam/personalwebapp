import React, {Component} from 'react'
import './Navbar.css'

import logo from '../logo.svg'
class Navbar extends Component{
    render(){
        return(
            <header>
                <img src={logo} alt={logo} className="navbar-logo"/>
                
            <nav>
                
                <ul className="nav_links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                
            </nav>
            </header>
        )
    }
}
export default Navbar;