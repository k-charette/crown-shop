import React, { useState } from "react"

import "./sign-in-styles.scss"

const SignIn = (props) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

const handleSubmit = event => { 
    event.preventDefault();
    setUser({
        email: '',
        password: ''
    })
}

const handleChange = event => {
    const { value, name } = event.target;
    setUser({ [name]: value})
}

    return (
        <div className="sign-in">
            <h2> I already have an account. </h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <input 
                    name="email" 
                    type="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
                <label>Email</label>
                   <input 
                    name="password" 
                    type="password"
                    onChange={handleChange}
                    value={user.email}
                    required
                />
                <label>Password</label>

                <input type="submit" value="Submit Form" />
            </form>
        </div>
    )
}

export default SignIn