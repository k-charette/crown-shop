import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
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
                <Link to="" className="option">
                    CONTACT
                </Link> 
                {
                    props.currentUser ? 
                    (
                        <div className="option" onClick={() => auth.signOut()}> SIGN OUT </div>  
                       
                    ) : (
                        <Link to="/registration" className="option">SIGN IN</Link>  
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)