import React from "react"
import CustomButton from "../custom-button/CustomButton"

import "./item-collection-styles.scss"

const ItemCollection = (props) => {
    return (
        <div className="item-collection">   
            <div 
                className="image"
                style={{
                    backgroundImage: `url(${props.imageUrl})`
                }}
            />
            <div className="footer-collection">
                <div className="name"> {props.name} </div>   
                <div className="price"> ${props.price} </div>
            </div>

            <CustomButton inverted> ADD TO CART </CustomButton>
        </div>
    )
}

export default ItemCollection