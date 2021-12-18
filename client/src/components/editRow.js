import React from "react"


const EditRow = ({e, hadleEditClick}) =>{

    return (
        <tr>
        <td>{e.description}</td>
        <td>{e.amount}</td>
        <td>{e.date}</td>
        <td>{e.types.name}</td>
        <td>{e.users.name}</td> 
        <td>
            <button typeof="button" 
            onClick={(event)=>hadleEditClick(event, e)}> 
            Edit </button>
        </td>
    </tr>
    )
}

export default EditRow