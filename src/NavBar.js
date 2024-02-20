import React from "react";
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="Navbar">
            <ul className="bar">
                <li><img src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1708185094/logotodolist_crl3uf.png" alt="logophoto" /></li>
                <li><a href="Home">Home</a> </li>
                <li><a href="About">About</a> </li>
                <li><a href="list">List</a> </li>
            </ul>
        </div>
    )
}

export default NavBar
