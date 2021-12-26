const express=require('express')
const app=express()
const session = require ('express-session'); 
const cookies = require ('cookie-parser');
var path = require ('path');
const port=3003
const cors= require('cors')





app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}));


 const userApi = require('./Api/routers/userRouter')
 const operationApi = require('./Api/routers/operationRouter');
// const typeApi = require('./src/API/routers/typeRouter');

 app.use('/users',userApi)
 app.use('/operation',operationApi)
// app.use('/types',typeApi)

const methodOverride =  require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use (session({ 
    secret: 'this is a secret',
    resave: false,
    saveUninitialized:false
}));

app.use(cookies());

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.listen(port, ()=>console.log(` servidor corriendo en ${port} `) )