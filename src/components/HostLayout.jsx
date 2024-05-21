import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const HostLayout = () => {

    const hostStlyes = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return(
        <>
            <nav className="host-nav">
                <NavLink end style={({ isActive }) => isActive ? hostStlyes : null} to="/host">Dashboard</NavLink>
                <NavLink style={({ isActive }) => isActive ? hostStlyes : null} to="/host/income">Income</NavLink>
                <NavLink style={({ isActive }) => isActive ? hostStlyes : null} to="/host/vans">Vans</NavLink>
                <NavLink style={({ isActive }) => isActive ? hostStlyes : null} to="/host/reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    );
}