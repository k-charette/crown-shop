import React from "react"
import { Link } from "react-router-dom"

import "./header-styles.scss"

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <i className="fas fa-crown"></i>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/shop" className="option">
                    CONTACT
                </Link>
                <Link to="/registration" className="option">
                    SIGN UP
                </Link>
            </div>
        </div>
    )
}

export default Header