import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
    const [change, setChange] = useState(true);
    const handleToggle = () => {
        if (change === true) {
            setChange(false);
        } else {
            setChange(true);
        }
    };
    const handleMenu = () => {
        setChange(true);
        console.log(change, "arif");
    };
    const handleBlur = () => {
        if (change === true) {
            setChange(false);
        } else {
            setChange(true);
        }
    };
    return (
        <div>
            <header>
                <nav>
                    <div className="logo">
                        <p>NavBar</p>
                    </div>
                    <div className={change ? "nav-i nav-item" : "nav-i-open nav-item"}>
                        <ul>
                            <li onClick={handleMenu}>
                                <NavLink
                                    style={{ textDecoration: "none" }}
                                    to="/home"
                                    className={({ isActive }) => (isActive ? "active alink" : "alink")}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li onClick={handleMenu}>
                                <NavLink
                                    style={{ textDecoration: "none" }}
                                    to="/services"
                                    className={({ isActive }) => (isActive ? "active alink" : "alink")}
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li onClick={handleMenu}>
                                <NavLink
                                    style={{ textDecoration: "none" }}
                                    to="/about"
                                    className={({ isActive }) => (isActive ? "active alink" : "alink")}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li onClick={handleMenu}>
                                <NavLink
                                    style={{ textDecoration: "none" }}
                                    to="/contact"
                                    className={({ isActive }) => (isActive ? "active alink" : "alink")}
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li onClick={handleMenu} className={change ? "na" : "na-1"}>
                                <NavLink
                                    style={{ textDecoration: "none" }}
                                    to="/login"
                                    className={({ isActive }) => (isActive ? "active alink li" : "alink li")}
                                >
                                    Log In
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="log-in">
                        <NavLink style={{ textDecoration: "none" }} to="/login" className={({ isActive }) => (isActive ? "active " : "")}>
                            Log In
                        </NavLink>
                    </div>
                    <div className="bar" onClick={handleToggle}>
                        <span className={change ? "s-child-11" : "s-child-1"}></span>
                        <span className={change ? "s-child-12" : "s-child-2"}></span>
                        <span className={change ? "s-child-13" : "s-child-3"}></span>
                    </div>
                </nav>
                <div className={change ? "blur-close" : "blur"} onClick={handleBlur}></div>
            </header>
        </div>
    );
}
