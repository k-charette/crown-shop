import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {
	googleSignInStart,
	emailSignInStart
} from "../../redux/user/user-actions";

import "./sign-in-styles.scss";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
	const [user, setUser] = useState({
		email: "",
		password: ""
	});

	const handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = user;
		emailSignInStart(email, password);

		// try {
		// 	await auth.signInWithEmailAndPassword(email, password);
		// 	setUser({ email: "", password: "" });
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	const handleChange = event => {
		setUser({
			...user,
			[event.currentTarget.id]: event.currentTarget.value
		});
	};

	return (
		<div className="sign-in">
			<h2> I already have an account </h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					id="email"
					type="email"
					label="email"
					handleChange={handleChange}
					value={user.email}
				/>
				<FormInput
					name="password"
					id="password"
					type="password"
					label="password"
					handleChange={handleChange}
					value={user.password}
				/>
				<br />
				<div className="buttons">
					<CustomButton type="submit"> Sign In </CustomButton>
					<CustomButton
						type="button"
						onClick={googleSignInStart}
						isGoogleSignIn
					>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
