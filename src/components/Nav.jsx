import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
    return(
        <header>
            <Link className="site-logo" to="/">#VANLIFE</Link>
            <nav>
                <Link to="/host">Host</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    );
}