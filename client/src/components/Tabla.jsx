import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useState,useEffect, Fragment } from 'react';
import axios from 'axios';
import EditRow from './EditRow';
import EditTableRows from './EditTableRows';

const Tabla = () => {

    const [presupuestos,setPresupuestos]=useState([])
    
    // const[editFormData, setEditFormData] = useState({
    //   descripcion:"",
    //   monto:"",
    //     tipo:"",
    //     date:""
    // })

     const [editPresupuestos, setEditPresupuestos] = useState(null);

     const hadleEditClick = (event,e)  =>{
      e.preventDefault();
      setEditPresupuestos(event.id)
     }
    
    const obtenerDatos = async () => {
        //await axios.get('http://localhost:3003/api/operations')
        await axios.get('http://localhost:3003/operations/list')
        .then(function (response){

        const presupuesto = response.data.data
        console.log(presupuesto);
        setPresupuestos(presupuesto);
    })

    }
    useEffect(() => {
        obtenerDatos()
    }, [])
    return ( 
      <form> 
    <Table striped bordered hover size="sm" >
    <thead>
      <tr>
        <th>DESCR</th>
        <th>MONTO</th>
        <th>Fecha</th>
        <th>tipo</th>
        <th>Usuario</th>
        <th>editar</th>
        
      </tr>
    </thead>
    <tbody>
    {presupuestos.map ((e)=>(  
    <Fragment> 

      <EditTableRows/>
      <EditRow e={e}/>
     {/* {editPresupuestos === e.id ? ( <EditTableRows/>)
      : ( <EditRow e={e} hadleEditClick ={hadleEditClick}/> )} */}

      </Fragment>
    ))}
    </tbody>
    
  </Table> </form> );
 
}
 
export default Tabla;


