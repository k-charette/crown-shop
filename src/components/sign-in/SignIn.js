import React, { useState } from "react"
import FormInput from "../form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"
import { auth } from "../../firebase/firebase.utils"
import { signInWithGoogle } from "../../firebase/firebase.utils"

import "./sign-in-styles.scss"

const SignIn = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async event => { 
        event.preventDefault()
        const { email, password } = user

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUser({ email: '', password: '' })
        } catch(error) {
            console.log(error)
        }

    }

    const handleChange = (event) => {
        setUser({
                ...user, 
                [event.currentTarget.id]: event.currentTarget.value
        })
    }

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
                <br/>
                <div className="buttons">
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn> 
                        Sign In With Google 
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn