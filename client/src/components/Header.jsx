import * as Mui from '@material-ui/core'
import { useState } from 'react';


const Header = () => {
    const [opt, setOpt]=useState(0)
    return ( 
        <>
        <Mui.AppBar position="static" >
            <Mui.Toolbar>
            <Mui.Typography variant="h4">Demo con material UI</Mui.Typography>
            </Mui.Toolbar>
        <Mui.Paper>
            <Mui.Tabs indicatorColor="primary" value={opt} centered >
                <Mui.Tab label="Home" onClick={()=>{setOpt(0)}} />
                <Mui.Tab label="Register" onClick={()=>{setOpt(1)}} />
                <Mui.Tab label="Contactos" onClick={()=>{setOpt(2)}}/>

            </Mui.Tabs>
        </Mui.Paper>
        </Mui.AppBar>
    
        
        </>
    );
}
 
export default Header;