const express = require('express')
const { signUpDB1, get1, patch1, post2, get2, get3, patch4, delete5} = require('./db')
const { connectToMongo } = require('./db')
connectToMongo()
const app = express()
const port = process.env.PORT ?? 3000

//const { connectToMongo } = require("./db")
app.use(express.json())

app.post('/api/colecao',  async(req, res) => {
    const a = await signUpDB1(req.body)
    a ? res.status(201).json({_id : a}) : res.status(409).json()
    
})

app.get('/api/colecao/:id',  async(req, res) => {
    console.log(req.params)
    const a = await get1(req.params.id)
    console.log(a)
    a ? res.status(200).json(a) : res.status(404).json()
    
})

app.patch('/api/colecao/:id',  async(req, res) => {
    console.log(req.params)
    const a = await patch1(req.params.id, req.body)
    console.log(a)
    a ? res.status(200).json() : res.status(404).json()
    
})

//2 reminders lembetes cia e ler todos

app.post('/api/reminders',  async(req, res) => {
    const a = await post2(req.body)
    res.status(201).json({_id : a})
})

app.get('/api/reminders',  async(req, res) => {
    const a = await get2()
    res.status(200).json(a)
})

//3

app.get('/api/reminders/:id',  async(req, res) => {
    console.log(req.params)
    const a = await get3(req.params.id)
    console.log(a)
    a ? res.status(200).json(a) : res.status(404).json()
})

//4

app.patch('/api/reminders/:id',  async(req, res) => {
    //console.log(req.params)
    const a = await patch4(req.params.id, req.body)
    //console.log(a)
    a ? res.status(200).json() : res.status(404).json()
})


//5
app.delete('/api/reminders/:id',  async(req, res) => {
    //console.log(req.params)
    const a = await delete5(req.params.id)
    console.log(a)
    a.deletedCount > 0? res.status(200).json() : res.status(404).json()
})



app.listen(port, () => {
    console.log(`À escuta em http://localhost:${port}`)
})