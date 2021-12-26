import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import axios from 'axios';
// import EditRow from './editRow';
// import EditTableRows from './EditTableRows';

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
      await axios.get('http://localhost:3003/operations/list')
      
      .then(function (response){

      const presupuesto = response.data.data
    
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
   
   <tr key={e.id} >
   <td>{e.description}</td>
   <td>{e.amount}</td>
   <td>{e.date}</td>
   <td>{e.types.name}</td>
   <td>{e.users.name}</td> 
   
</tr>
   
   
   
   
   // <Fragment> 

    //   {/* <EditTableRows/> */}
    //   <EditRow key = {e.id} e={e}/>
    //  {/* {editPresupuestos === e.id ? ( <EditTableRows/>)
    //   : ( <EditRow e={e} hadleEditClick ={hadleEditClick}/> )} */}

    //   </Fragment>
    ))}
    </tbody>
    
  </Table> </form> );
 
}
 
export default Tabla;


