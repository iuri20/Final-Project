import { login } from "../../../services/signin"

export default async function (req, res){
    if(req.method === "POST"){ 
        console.log("func")
        console.log(req.body.email)
        const { email, password} = req.body
        return login(email, password, res)
    }
}

