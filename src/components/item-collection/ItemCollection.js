import React from "react"
import CustomButton from "../custom-button/CustomButton"

import { connect } from "react-redux"
import { addItem } from "../../redux/cart/cart-actions"

import "./item-collection-styles.scss"

const ItemCollection = ({ item, addItem }) => {
    const { name, price, imageUrl } = item
    return (
        <div className="item-collection">   
            <div 
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="footer-collection">
                <div className="name"> {name} </div>   
                <div className="price"> ${price} </div>
            </div>

            <CustomButton onClick={() => addItem(item)} inverted> ADD TO CART </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ItemCollection)