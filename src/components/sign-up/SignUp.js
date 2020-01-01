import React, { useState } from "react"
import FormInput from "../form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"
import "./sign-up-styles.scss"

const SignUp = () => {

    const [signUp, setSignUp] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const { displayName, email, password, confirmPassword } = signUp;
    
    const handleSubmit = async event => {

        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return;
        } 

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            
            await createUserProfileDocument(user, {displayName})

            setSignUp({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        } catch (error) {
            console.error(error)
        } 
    }

    const handleChange = (event) => {
        setSignUp({
            ...signUp, 
            [event.currentTarget.id]: event.currentTarget.value
       })
    }

    return (
        <div className="sign-up">
            <h2 className="title">
                I do not have an account
            </h2>
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
    )
}

export default SignUp