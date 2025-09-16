import React from "react";
import { Link, Element } from 'react-scroll'
import './navbar.css'
import About from "../About/about";


export default function Navbar() {
    return (
        <>
            <div className="navbar">

                <div className="image"><img src="src\assets\Logo-first.jpg" alt="Logo" /></div>

                <ul className="nav-menu">
                    <Link to="home" smooth={true} duration={100}><li className="item">Home</li></Link>
                    <Link to="about" smooth={true} duration={1000}><li className="item">About</li></Link>
                    <Link to="skill" smooth={true} duration={1000}><li className="item">Skill</li></Link>
                    <Link to="services" smooth={true} duration={1000}><li className="item">Service</li></Link>
                    <Link to="contact" smooth={true} duration={1000}><li className="item">Contact</li></Link>

                </ul>


                <div className="nav-connect"><p>Contact me</p></div>

            </div>
        </>
    )
}