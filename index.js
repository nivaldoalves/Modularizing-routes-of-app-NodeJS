const express = require('express')
const rotas = require('./rotas')
const porta = process.env.PORT

const app = express()

app.use('/', rotas)

app.get('*',(req,res)=>{
  res.send('Cursos')
})

app.listen(porta, ()=>{console.log('rodando')})
