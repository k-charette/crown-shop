import React from "react"
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebase.utils"

import "./header-styles.scss"

const Header = (props) => {

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
                <Link to="/registration" className="option">SIGN IN</Link>   
                <div className="option" onClick={() => auth.signOut()}> SIGN OUT </div> 
            </div>
        </div>
    )
}

export default Header