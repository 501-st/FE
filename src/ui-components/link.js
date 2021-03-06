import React from 'react';
import "../index.css"
import { NavLink } from "react-router-dom"

const Link = ({to, children}) => {
    return(
        <NavLink className={({isActive}) => isActive ? "active" : ""} style={{textDecoration: "none", color: "inherit", padding: "15px"}} to={to}>
            {children}
        </NavLink>
    )
}

export default Link;