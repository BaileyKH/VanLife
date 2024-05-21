import React from "react";
import { NavLink, Link } from "react-router-dom";

export const Nav = () => {
    return(
        <header>
            <Link className="site-logo" to="/">#VANLIFE</Link>
            <nav>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/host">Host</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/vans">Vans</NavLink>
            </nav>
        </header>
    );
}