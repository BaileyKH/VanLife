import React from "react";

import { Outlet, Navigate } from "react-router-dom";

export const AuthRequired = () => {

    const isLoggedIn = localStorage.getItem("loggedin")

    if (!isLoggedIn){
        return <Navigate 
                    to="/login" 
                    state={{message: "You must log in first"}}
                />
    }

    return <Outlet />
}