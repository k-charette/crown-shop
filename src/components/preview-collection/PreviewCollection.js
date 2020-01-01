import React from "react";

import ItemCollection from "../item-collection/ItemCollection"

import "./preview-collection-styles.scss"

const PreviewCollection = (props) => {

    return (
        <div className="preview-collection">
            <h1 className="title">{props.title.toUpperCase()}</h1>
            <div className="preview">
                {
                    props.items.filter((item, index) => index < 4 ).map(item => {
                        return (
                            <ItemCollection key={item.id}
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