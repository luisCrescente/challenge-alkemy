import React,{useState} from "react";
import axios from "axios";
import {useHistory} from "react-router";


const Login = () => {

    const [body, setBody] = useState({email:"", password:""});
    const {push } = useHistory()
    const inputChange = ({target})=>{
        const {name, value} = target
        setBody({
            ...body,
            [name]:value
        })
    }

    const onSubmit =()=>{
        //  console.log(body)
        axios.post("http://localhost:3003/api/login", body)
        .then(({data}) =>{
           localStorage.setItem("auth", '"yes"')
            push("/app")
        })
        .catch(({response}) =>{
            console.log(response.data)
        })
    }

return ( <>
    <input type="email" placeholder="email" 
    value= {body.email}
    onChange={inputChange}
    name="email"
    />
    <input type="password" placeholder="contraseña" 
    value= {body.password}
    onChange={inputChange}
    name="password"/>

    <button type="submit"
    onClick={onSubmit}
    >Ingresar</button>
      </> );
}
 
export default Login;