import React from "react"

import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";

export const Layout = () => {
    return(
        <>
           <Nav />
           <Outlet />    
        </>
    );
}