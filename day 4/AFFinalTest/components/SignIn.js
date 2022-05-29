import { useState } from "react"
import Link from "next/link"

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
                    <input placeholder="Your Email" onChange={(e) => setSignIn({ ...signIn, email: e.target.value })} type="email"></input></label>
                <label>Password
                    <input placeholder="Your Password" type="password"></input></label>
                <p><Link href="#">Forgot your password?</Link></p>
                <p><Link href="/login/signup">Don't have an account?</Link></p>
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