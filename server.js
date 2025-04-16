const express = require("express")
const app = express()
const provaider1 = require("./routes/provader1")


app.use('/provider1', provaider1)

const PORT = 8090
app.listen(PORT, () =>{
    console.log(`servidor rodando na porta ${PORT}`)
})