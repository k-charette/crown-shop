import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop-actions";
import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverviewContainer";
import CollectionPageContainer from "../collection/CollectionContainer";

//convert functional component to a class component
const Shop = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	//fetch the collections array from firestore with componentDidMount()
	// componentDidMount() {
	// 	const { fetchCollectionsStart } = this.props;
	// 	fetchCollectionsStart();
	// }
	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				component={CollectionsOverviewContainer}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionPageContainer}
			/>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(Shop);
