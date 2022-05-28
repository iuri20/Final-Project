import { useState } from "react"

export default function SignIn() {
    const [signIn, setSignIn] = useState({
        email: "",
        password: ""
    })
    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={(e) => {
                e.preventDefault(),
                    validateSignIn(signIn)
            }}>
                <label>Your Email
                    <input type="email"></input></label>
                <label>Password
                    <input type="password"></input></label>
                <p><a href="#">Forgot your password?</a></p>
                <input value="Login" type="submit"></input>
            </form>
        </div>
    )
}

function validateSignIn(user) {
    console.log("SignIn Sucessfull")
    //TODO
    //Connect to backend to send the data to be checked
}