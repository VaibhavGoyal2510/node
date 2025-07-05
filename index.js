require('dotenv').config()
const express = require('express');
const app = express()
// const PORT = 3000


app.get('/',(req,res)=>{
    // <>'<h1>Hello Ji, Kese Ho Saare..?</h1>'</>
    res.send('<h1>Hello Ji</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log('Listening On Port ',process.env.PORT,`http://localhost:${process.env.PORT}`)
})