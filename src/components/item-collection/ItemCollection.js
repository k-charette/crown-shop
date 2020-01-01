import React from "react"

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
        </div>
    )
}

export default ItemCollection