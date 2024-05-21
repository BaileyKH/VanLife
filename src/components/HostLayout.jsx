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
                <NavLink end style={({ isActive }) => isActive ? hostStlyes : null} to=".">Dashboard</NavLink>
                <NavLink style={({ isActive }) => isActive ? hostStlyes : null} to="income">Income</NavLink>
                <NavLink style={({ isActive }) => isActive ? hostStlyes : null} to="vans">Vans</NavLink>
                <NavLink style={({ isActive }) => isActive ? hostStlyes : null} to="reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    );
}