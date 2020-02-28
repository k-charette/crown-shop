import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Registration from "./pages/registration/Registration";
import Checkout from "./pages/checkout/Checkout";
import { selectCurrentUser } from "./redux/user/user-selectors";
import { checkUserSession } from "./redux/user/user-actions";

import "./App.css";

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);
	// unsubscribeFromAuth = null;

	// componentDidMount() {
	// 	const { checkUserSession } = this.props;
	// 	checkUserSession();
	// CODE BELOW MOVED TO USER-SAGAS
	// this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
	// 	if (userAuth) {
	// 		const userRef = await createUserProfileDocument(userAuth);
	// 		userRef.onSnapshot(snapShot => {
	// 			setCurrentUser({
	// 				id: snapShot.id,
	// 				...snapShot.data()
	// 			});
	// 		});
	// 	}
	// 	setCurrentUser(userAuth);

	// componentWillUnmount() {
	// 	this.unsubscribeFromAuth();
	// }
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop" component={Shop} />
				<Route exact path="/checkout" component={Checkout} />
				<Route
					exact
					path="/registration"
					render={() => (currentUser ? <Redirect to="/" /> : <Registration />)}
				/>
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
