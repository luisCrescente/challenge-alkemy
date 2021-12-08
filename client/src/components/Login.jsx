import * as Mui from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';



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
    }
}))

const Login =  () => {

    const navigate= useNavigate()
    const classes = useStyles()
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")
    //const validadorEmail =/^\w+@\w+\.\w{2,3}(\.(ar|uy|br))?$/
    //const validadorPass =/^\w{5,8}$/i

    const onSubmit = async (e) => {
        e.preventDefault();          
        const token =  await axios.post('http://localhost:3003/api/login',{
                    email:email,
                    password:password
                });
                localStorage.setItem(token.data);
                console.log(token);
                navigate("/")

    }   
    const formRegister = ()=>{
        navigate("/register")
    }

    return ( <>

<Mui.Grid >
            <Mui.CssBaseline />
            <Mui.Container  elevation={5} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                    <Mui.Avatar className={classes.avatar}>
                        <LockOpenIcon/>
                    </Mui.Avatar>
                    <Mui.Typography component='h1' variant='h5'>LOGIN</ Mui.Typography>
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
                        <Mui.Button
                            fullWidth
                            variant='contained'
                            color='secondary'
                            className={classes.button}
                            onClick={onSubmit}
                        >
                            Ingresar
                        </Mui.Button>
                        <Mui.Button
                            fullWidth
                            variant='outlined'
                            color='secondary'
                            className={classes.button}
                            onClick={formRegister}
                        >
                            Registrate
                        </Mui.Button>
                    </form>
                </div>
            </Mui.Container>
        </Mui.Grid>
    
    </> );
}
 
export default Login;