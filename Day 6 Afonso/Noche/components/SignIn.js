import { useState } from "react"
import Link from "next/link"
import styles from "../styles/login.module.css"

export default function SignIn() {
    const [signIn, setSignIn] = useState({
        email: "",
        password: ""
    })
    return (
        <div className={styles.container}>
            <h1>Sign In</h1>
            <form onSubmit={(e) => {
                e.preventDefault(),
                    validateSignIn(signIn)
            }}>
                <p className={styles.description}>Your Email</p>
                    <input placeholder="Your Email" onChange={(e) => setSignIn({ ...signIn, email: e.target.value })} type="email"></input>
                <p className={styles.description}>Password</p>
                    <input placeholder="Your Password" type="password"></input>
                <p><Link href="#">Forgot your password?</Link></p>
                <h3>Don't have an account? <Link href="/login/signup"> Sign Up!</Link></h3>
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