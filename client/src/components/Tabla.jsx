import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import axios from 'axios'

const Tabla = () => {

    const [presupuestos,setPresupuestos]=useState([])
    
    
    const obtenerDatos = async () => {
        await axios.get('http://localhost:3003/api/operations')
        .then(function (response){
        const presupuesto = response.data
        setPresupuestos(presupuesto);
    })

    }
    useEffect(() => {
        obtenerDatos()
    }, [])
    return ( 
    
    <Table striped bordered hover size="sm" >
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        
      </tr>
    </thead>
    <tbody>
    {presupuestos.map ((e)=>(  
      <tr key={e.id}>
        <td>{e.description}</td>
        <td>{e.amount}</td>
        <td>{e.id_type}</td>
        <td>{e.id_user}</td>
      </tr>
    ))}
    </tbody>
    
  </Table> );
}
 
export default Tabla;


