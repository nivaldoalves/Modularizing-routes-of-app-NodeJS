const express = require('express')
const rotas = express.Router()

let cursosInfo = [
  {'curso':'node','info':'Curso de Node'},
  {'curso':'java','info':'Curso de Java'},
  {'curso':'react','info':'Curso de React'}
]

rotas.get('/', (req, res) => {
  res.json({ Olá: 'Nivaldo' })
})

rotas.get('/:cursoid', (req, res)=>{
  const curso = req.params.cursoid
  const cursoI = cursosInfo.find(i=>i.curso == curso)
  if (!cursoI){
    res.status(404).json(
      {erro: 'Não encontrado', cursoPesq: curso}
    )
  }else{
    res.status(200).json(cursoI)
  }
})
module.exports = rotas
