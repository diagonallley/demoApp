const axios= require('axios');
const express=require('express');

const app=express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.send("This is the home directory");
    
});

app.get('/Register',(req,res)=>{
    res.render('Register');
    
    
});

app.get('/Login',(req,res)=>{
    res.render('Login');
})



app.post('/RegisterUser',(req,res)=>{
   res.send("Registered");
   console.log(req.body);

});

app.listen(3000,()=>{
    console.log('Listening on port 3000');

})