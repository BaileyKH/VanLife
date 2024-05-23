import React from "react";
import { NavLink, Link } from "react-router-dom";
import userIcon from '/src/assets/images/avatar-icon.png'

export const Nav = () => {

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return(
        <header>
            <Link className="site-logo" to="/">#VANLIFE</Link>
            <nav>
                <NavLink className="nav-links" style={({isActive}) => isActive ? activeStyles : null} to="/host">Host</NavLink>
                <NavLink className="nav-links" style={({isActive}) => isActive ? activeStyles : null} to="/about">About</NavLink>
                <NavLink className="nav-links" style={({isActive}) => isActive ? activeStyles : null} to="/vans">Vans</NavLink>
                <Link to="login" className="login-link">
                    <img src={userIcon} className="login-icon"/> 
                    <button onClick={fakeLogOut} className="login-button">sign out</button>
                </Link>
            </nav>
        </header>
    );
}

 