import React from "react";

import ItemCollection from "../item-collection/ItemCollection"

import "./preview-collection-styles.scss"

const PreviewCollection = ({ title, items }) => {

    return (
        <div className="preview-collection">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, index) => index < 4 ).map(item => {
                        return (
                            <ItemCollection key={item.id}
                                item={item}
                                name={item.name}
                                price={item.price}
                                imageUrl={item.imageUrl}
                            /> 
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PreviewCollection