import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar-container">
            <div className="logo">
                <div className="brand">
                    <Link to="/">books shop</Link>
                </div>
                <div onClick={() => setOpen(!open)} className="menu-toggler">
                    {open ? <XIcon /> : <MenuIcon />}
                </div>
            </div>
            <div className={`main-menu ${open && "show"}`}>
                <NavLink to="/">home</NavLink>
                <NavLink to="reviews">reviews</NavLink>
                <NavLink to="dashboard">dashboard</NavLink>
                <NavLink to="blogs">blogs</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
