require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


  app.get('/twiter',(req,res)=>{
    res.send("Samarthtwiteer")

  })
  app.get('/login',(req,res)=>{
    res.send('<h1>hi welcome to login page</h1>')
  })
  
  app.get('/youtube',(req,res)=>{
    res.send('<h2>youtube</h2>')
  })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})