import React from "react";

const EditTableRows = ()=>{
    return (

            <tr>
                <td><input type="text" placeholder="Descripcion" name="descripcion" /></td>
                <td><input type="number" placeholder="Ingrese un monto" name="monto" /></td>
                
                <td><input type="date" name="date" /></td>
            </tr>

    )

}

export default EditTableRows