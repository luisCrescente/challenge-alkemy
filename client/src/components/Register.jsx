
import * as Mui from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router'


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
        margin: theme.spacing(1),
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


const Register = () => {

    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")
    const [name ,setname]=useState("")
    const classes = useStyles()
    const navigate = useNavigate()
    

const onSubmit=   (e)=>{
        e.preventDefault();
       
        axios.post('http://localhost:3003/users/register',{

            email:email,
            password:password,
            name:name

            }).then(()=>{                
                navigate("/login")
            }).catch((error)=>{
                console.log(error);
            })
    }
return ( <>

<Mui.Grid >
            <Mui.CssBaseline />
            <Mui.Container  elevation={5} maxWidth='xs' className={classes.container}>{/*component={Paper}*/}
                <div className={classes.div}>
                    <Mui.Avatar className={classes.avatar}>
                        <AppRegistrationIcon/>
                    </Mui.Avatar>
                    <Mui.Typography component='h1' variant='h5'>Registro</ Mui.Typography>
                    <form className={classes.form}>
                        <Mui.TextField
                            fullWidth
                            type='text'
                            autoComplete='off'
                            color='primary'
                            margin='normal'
                            variant='standard'
                            label='email'
                            onChange={(e)=> setemail(e.target.value)}
                            name='email'
                        />
                        
                        <Mui.TextField
                            fullWidth
                            type='password'
                            color='primary'
                            margin='normal'
                            variant='standard'
                            label='password'
                            onChange={(e)=> setpassword(e.target.value)}
                            name='password'
                        /> 
                        
                        <Mui.TextField
                            fullWidth
                            type='text'
                            autoComplete='off'
                            color='primary'
                            margin='normal'
                            variant='standard'
                            label='nickname'
                            onChange={(e)=> setname(e.target.value)}
                            name='name'
                        /> 
                        <Mui.Button
                            fullWidth
                            variant='contained'
                            color='secondary'
                            className={classes.button}
                            onClick={onSubmit}
                        >
                            Crear Usuario
                        </Mui.Button>
                    </form>
                </div>
            </Mui.Container>
        </Mui.Grid>

    
        
    </> );
}

export default Register