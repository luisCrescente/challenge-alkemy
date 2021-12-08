import { useState, useEffect } from "react";
import axios from 'axios'




const Home = () => {

    const [presupuestos,setPresupuestos]=useState([])
    // const obtenerDatos = async () => {
    // const data = await fetch('http://localhost:3003/api/operations')
    //     const presupuesto = await data.json()
        

    //     console.log(presupuesto);
    //     setPresupuestos(presupuesto);
    // }

    // useEffect(() => {
    //     obtenerDatos()
    // }, [])

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
        <>
        <ul>

{presupuestos.map((e)=>(

    <li key={e.id}>
        <span>{e.amount}</span>
        <span>{e.description}</span>
        
    </li>

))}
</ul>
        </>
    );
}

export default Home;