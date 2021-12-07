const express=require('express')
const app=express()
const port=3003
const cors= require('cors')
const mysql=require('mysql')
const bodyParser= require('body-parser')





app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))


const credentials = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'alkemy'
}



app.get('/users',(req,res)=>{

    const sqlselect= "SELECT * FROM users"
    const connection = mysql.createConnection(credentials)
	connection.query(sqlselect, (error, result) => {
		
		if (error) {
			res.status(500).send(error)
		} else {
			res.send(result)
		}
	})
	connection.end()
    
    
})

app.post('/api/insert',(req,res)=>{
    const email= req.body.email;
    const password=req.body.password;
	const name=req.body.name
    
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
		var connection = mysql.createConnection(credentials)
		connection.query("SELECT * FROM users WHERE email = ? AND password = ?",
		values, (err, result)=>{
			if(err){
				res.status(500).send(err)
			}else{
				if(result.length > 0){
					res.status(200).send({
						"id":result[0].id,
						"email":result[0].name,
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