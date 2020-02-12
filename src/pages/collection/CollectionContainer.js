import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop-selectors";
import WithSpinner from "../../components/withSpinner/WithSpinner";
import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(Collection);

export default CollectionPageContainer;
