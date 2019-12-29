import React, { useState } from "react"

import SHOP_DATA from './shop-data.js'
import PreviewCollection from "../../components/preview-collection/PreviewCollection"

const Shop = (props) => {

    const [collections, setCollections] = useState([SHOP_DATA])

    return (
        <div className="shop-page">
            {
                collections[0].map(collection => {
                    return(
                        <PreviewCollection 
                            key={collection.id}
                            title={collection.title}
                            items={collection.items}
                        />
                    )
                })
            }
        </div>
    )
}

export default Shop