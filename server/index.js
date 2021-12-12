const express=require('express')
const app=express()
const port=3003
const cors= require('cors')
const mysql=require('mysql')
const bodyParser= require('body-parser')

const userApi = require('./src/API/routers/usersApiRouter');
const operationApi = require('./src/API/routers/operationsApiRoute');
const typeApi = require('./src/API/routers/typesApiRouter');


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/users',userApi)
app.use('/operations',operationApi)
app.use('/types',typeApi)


const credentials = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'alkemy'
}



app.get('/api/users',(req,res)=>{
    const sqlselect= "SELECT * FROM users"
    const connection = mysql.createConnection(credentials)
	connection.query(sqlselect, (error, result) => {
		
		console.log(result);
		
		if (error) {
			throw error
		} else {
				res.status(200).send(result)
			}
	})
	connection.end()
    
    
})

app.get('/api/operations',(req,res)=>{

    const sqlselect= "SELECT * FROM operations"
    const connection = mysql.createConnection(credentials)
	connection.query(sqlselect, (error, result) => {
		
		console.log(result);
		
		if (error) {
			throw error
		} else {
				res.status(200).send(result)
			}
	})
	connection.end()
    
    
})

app.get('/api/types',(req,res)=>{

    const sqlselect= "SELECT * FROM types"
    const connection = mysql.createConnection(credentials)
	connection.query(sqlselect, (error, result) => {
		
		console.log(result);
		
		if (error) {
			throw error
		} else {
				res.status(200).send(result)
			}
	})
	connection.end()
    
    
})

app.post('/api/insert',(req,res)=>{
    const email= req.body.email;
    const password=req.body.password;
	const name=req.body.name
    console.log(email);
    console.log(password);
	console.log(name);
    const sqlInsert= `INSERT INTO users (email,password,name) VALUES (?,?,?)`
    const connection = mysql.createConnection(credentials)
	connection.query(sqlInsert,[email,password,name], (error, result) => {
		if (error) {
		res.status(500).send(error)
	} else {
			res.status(200).send(result)
		}
	 })
	 connection.end()

})


app.post("/api/login", (req,res)=> {
	const {email, password} = req.body
	const values = [email,password]
	const connection = mysql.createConnection(credentials)
		connection.query("SELECT * FROM users WHERE email = ? AND password = ?",
		values, (err, result)=>{
			if(err){
				res.status(500).send(err)
			}else{
				if(result.length > 0){
					res.status(200).send({
						"id":result[0].id,
						"email":result[0].email,
						"password":result[0].password
					})
				}else{
					res.status(400).send("usuario no existe")
				}
			}
		})
		connection.end()
})



app.listen(port, ()=>console.log(` servidor corriendo en ${port} `) )