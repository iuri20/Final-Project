import { useState } from "react"

export default function SignIn(){
    const [signIn, setSignIn] = useState({
        email: "",
        password: ""
    })

    const submit = async () => {
        const res = await fetch(
          '/api/signin/', {
          body: JSON.stringify(signIn),
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST"
        })
        const json = await res.json()
        
      }
    
    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                //TODO Link to home page
                
            }}>
                <label>Your Email
                    <input type="email" onChange={(e)=> setSignIn({...signIn, email: e.target.value})}></input></label>
                <label>Password
                    <input type="password" onChange={(e)=> setSignIn({...signIn, password: e.target.value})}></input></label>
                <p><a href="#">Forgot your password?</a></p>
                <input value="Login" type="submit" onClick={submit}></input>
            </form>
        </div>
    )
}
