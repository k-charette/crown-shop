import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { signUpStart } from "../../redux/user/user-actions";
import "./sign-up-styles.scss";

const SignUp = ({ signUpStart }) => {
	const [signUp, setSignUp] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: ""
	});

	const { displayName, email, password, confirmPassword } = signUp;

	const handleSubmit = async event => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		signUpStart({ displayName, email, password });

		// setSignUp({
		// 	displayName: "",
		// 	email: "",
		// 	password: "",
		// 	confirmPassword: ""
		// });
	};

	const handleChange = event => {
		setSignUp({
			...signUp,
			[event.currentTarget.id]: event.currentTarget.value
		});
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span> Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					id="displayName"
					name="displayName"
					label="display name"
					value={signUp.displayName}
					onChange={handleChange}
				/>
				<FormInput
					type="email"
					id="email"
					name="email"
					label="email"
					value={signUp.email}
					onChange={handleChange}
				/>
				<FormInput
					type="password"
					id="password"
					name="password"
					label="password"
					value={signUp.password}
					onChange={handleChange}
				/>
				<FormInput
					type="password"
					id="confirmPassword"
					name="confirmPassword"
					label="confirm password"
					value={signUp.confirmPassword}
					onChange={handleChange}
				/>
				<div className="buttons">
					<CustomButton type="submit"> Sign Up </CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	signUpStart: userInfo => dispatch(signUpStart(userInfo))
});

export default connect(null, mapDispatchToProps)(SignUp);
