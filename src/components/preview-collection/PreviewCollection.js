import React from "react";

import "./preview-collection-styles.scss"

const PreviewCollection = (props) => {

    return (
        <div className="preview-collection">
            <h1 className="title">{props.title.toUpperCase()}</h1>
            <div className="preview">
                {
                    props.items.filter((item, index) => index < 4 ).map(item => {
                        return(
                        <div key={item.id}> 
                            {item.name} 
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PreviewCollection