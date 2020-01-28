import React from "react"
import { connect } from "react-redux"

import { selectCollection } from "../../redux/shop/shop-selectors"

import ItemCollection from "../../components/item-collection/ItemCollection"

import "./collection-styles.scss"

const CollectionPage = ({ collection }) => {
    console.log(collection)
    return (
        <div className="collection-page">
            <h2>COLLECTION</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)