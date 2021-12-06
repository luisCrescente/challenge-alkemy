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

app.listen(port, ()=>console.log(` servidor corriendo en ${port} `) )