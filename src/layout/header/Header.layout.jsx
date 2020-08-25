import React from "react";
import NavLink from "components/nav-link/NavLink.component";

const Header = () => {
    return (
        <div className="header">
            <div className="header__nav">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </div>
        </div>
    );
};

export default Header;
