import React, { useState } from "react";
import './header.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";

// import { Link } from "react-router-dom";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="header">

            <RxHamburgerMenu
                className={`menu-burger ${isOpen ? "hidden" : ""}`}
                onClick={toggleMenu}
            />
            <RiCloseLargeLine
                className={`close ${isOpen ? "show" : ""}`}
                onClick={toggleMenu}
            />

            <nav className={isOpen ? "nav-open" : ""}>
                <a href="#home">მთავარი</a>
                <a href="#about">ჩემს შესახებ</a>
                <a href="#services">მარათონი</a>
                <a href="#testimonial">ემოციები</a>
                <a href="#contact">კონტაქტი</a>
            </nav>

           


        </div>
    )
}