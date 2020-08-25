import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ children, ...otherProps }) => {
    return (
        <NavLink {...otherProps} className="nav-link" activeClassName="active">
            {children}
        </NavLink>
    );
};

export default CustomNavLink;
