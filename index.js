const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())

app.get("/", (req,res) => {
    res.json({
        message: "Olá"
    })
})

app.get('/produtos', (req, res) => {
    res.json( [{nome: 'celular'}, {nome: 'tv'}, {nome: 'sofá'}])
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Rodando na porta ' + PORT)
})