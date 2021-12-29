const express = require('express')
const app = express()
const session = require('express-session');
const cookies = require('cookie-parser');
const methodOverride = require('method-override');
var path = require('path');
const cors = require('cors')
const port = 3003



const users = require('./routers/usersRouter')
const operations = require('./routers/operationsRoute');
// const typeApi = require('../src/API/routers/typeRouter');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'));

app.use(session({
    secret: 'this is a secret',
    resave: false,
    saveUninitialized: false
}));

app.use(cookies());

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use('/', users)
app.use('/operation', operations)
// app.use('/types',typeApi)



app.listen(port, () => console.log(` servidor corriendo en ${port} `))