import React from "react";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import "./registration-styles.scss";

const Registration = () => {
	return (
		<div className="registration">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default Registration;
