const express = require('express')
const { connectToMongo } = require('./db')
const { testEmail, testPassword, testPasswordConfirmation} = require("./services/auth");
const { createUser, findUserByEmail, createSession} = require("./services/authBD");
connectToMongo()
const app = express()
const port = process.env.PORT ?? 3000
app.use(express.json())

//signup and login
app.post("/signup", async (req, res) => { 
    const { passwordConfirmation, ...signupData}  = req.body
    const {name, password, address, age, sex, email} = signupData

    const errors = {
        ...await testEmail(email),
        ...testPassword(password),
        ...testPasswordConfirmation(password, passwordConfirmation),
    }
    //separar resposta de sucesso e resposta de erro
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ message: "Os dados introduzidos não são válidos.", errors })
    }
    const id = await createUser(signupData)
    res.status(200).json({ message: "Utilizador Criado com Sucesso!", _id: id.insertedId })
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await findUserByEmail(email)
    
    if (!user) { return res.status(404).json({ message: "O utilizador não foi encontrado!" }) }
    if (user.password !== password) {
        return res.status(401).json({ message: "A password introduzida é inválida!" })
    }
    const token = await createSession({userId: user._id})
    res.status(200).json({token: token.insertedId})
})


app.listen(port, () => {
    console.log(`À escuta em http://localhost:${port}`)
})