const express = require('express')
const app = express()
const PORT = 3000

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