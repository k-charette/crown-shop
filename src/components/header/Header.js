import React from "react"
import CartIcon from "../cart-icon/CartIcon"
import CartDropdown from "../cart-dropdown/CartDropdown"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { auth } from "../../firebase/firebase.utils"
import { selectCartHidden } from "../../redux/cart/cart-selectors"
import { selectCurrentUser } from "../../redux/user/user-selectors"

import "./header-styles.scss"

const Header = ({ currentUser, hidden }) => {

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
                    currentUser ? 
                    (
                        <div className="option" onClick={() => auth.signOut()}> SIGN OUT </div>  
                       
                    ) : (
                        <Link to="/registration" className="option">SIGN IN</Link>  
                    )
                }
                <CartIcon />
            </div>
            {
                hidden ? null : 
                <CartDropdown />
            }
        </div>
    )
}

// since we made the createStructuredSelector we can modify the our code
// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header)