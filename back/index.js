const express = require('express');
const app = express();
require('./bd.js')
PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(express.static('public'))
app.get('/',(req,res) => {
  res.sendFile(__dirname+'/index.hmtl');
});
app.post('/',(req,res) => {
  console.log(req.body.length)
  for(let i = 0 ; i < req.body.length ; i++ ){
    console.log(req.body[i])
  }
});

app.listen(PORT,()=>{
  console.log(`Servidor activo puerto ${PORT}`)
});