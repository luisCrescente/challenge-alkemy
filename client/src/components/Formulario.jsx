import * as Mui from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import { useState } from 'react';
import axios from 'axios';
//import {useNavigate} from 'react-router'
import Tabla from './Tabla'


const useStyles = makeStyles(theme => ({
    container: {
        height: '60%',
        marginTop: theme.spacing(10),
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            marginTop: 0,
            width: '100%',
            height: '100%'
        }
    },
    div: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.primary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(2)
    },
    button: {
        margin: theme.spacing(3, 0, 2)
    },
    error: {
        margin: theme.spacing(3, 0, 2),
        Color: theme.palette.secundary
    },
}))


const Formulario = () => {

    const [descripcion, setdescripcion]=useState("")
    const [tipo, settipo]=useState("")
    const [monto ,setmonto]=useState("")
    const classes = useStyles()
    //const navigate = useNavigate()
    
    


const onSubmit=   (e)=>{
        e.preventDefault();
       
        axios.post('http://localhost:3003/api/data',{

            descripcion:descripcion,
            tipo:tipo,
            monto:monto

            }).then(()=>{                
             console.log("hola")
            }).catch((error)=>{
                console.log(error);
            })
    }

return ( <>

<Mui.Grid >
            <Mui.CssBaseline />
            <Mui.Container  elevation={5} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                    <Mui.Avatar className={classes.avatar}>
                        <AttachMoneyTwoToneIcon/>
                    </Mui.Avatar>
                    <Mui.Typography component='h1' variant='h5'>Tus Operaciones</ Mui.Typography>
                    <form className={classes.form}>
                        <Mui.TextField
                            fullWidth
                            type='text'
                            autoComplete='off'
                            color='primary'
                            margin='normal'
                            variant='standard'
                            label='descripcion'
                            onChange={(e)=> setdescripcion(e.target.value)}
                            name='descripcion'
                        />
                        
                        <Mui.TextField
                            fullWidth
                            type='date'
                            color='primary'
                            margin='normal'
                            variant='standard'                            
                            //onChange={(e)=> setpassword(e.target.value)}
                            name='Fecha'
                        /> 
                        
                        <Mui.TextField
                            fullWidth
                            type='number'
                            autoComplete='off'
                            color='primary'
                            margin='normal'
                            variant='standard'
                            label='tipo'
                            onChange={(e)=> settipo(e.target.value)}
                            name='tipo'
                        /> 
                        <Mui.TextField
                            fullWidth
                            type='number'
                            autoComplete='off'
                            color='primary'
                            margin='normal'
                            variant='standard'
                            label='monto'
                            onChange={(e)=> setmonto(e.target.value)}
                            name='monto'
                        />
                        <Mui.Button
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={onSubmit}
                        >
                        Cargar Datos
                        </Mui.Button>
                    </form>
                </div>
            </Mui.Container>
        </Mui.Grid>

    <Tabla />
        
    </> );
}

export default Formulario;










