import React from "react"
import { connect } from "react-redux"
import { toggleCartHidden } from "../../redux/cart/cart-actions"

import "./cart-icon-styles.scss"

const CartIcon = ({ toggleCartHidden }) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <i className="fas fa-shopping-bag shopping-icon"></i>
            <span className="item-count">
                0
            </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)