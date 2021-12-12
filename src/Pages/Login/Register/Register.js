import { Alert, Button, CircularProgress, Container } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import login from '../../../images/login.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { NavLink, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Register = () => {
    const [LogInData, setLogInData] = useState({});
    const {registerUser, isLoading, user, authError} = useAuth();

    const history = useHistory();


    if(isLoading){
        return <CircularProgress />
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = {...LogInData};
        newLogInData[field] = value;
        console.log(newLogInData);
        setLogInData(newLogInData);
        
    }
    

    const handleLogin = e => {
        e.preventDefault();
        if(LogInData.password !== LogInData.password2){
            alert('Your password did not match')
            return
        }
        registerUser(LogInData.email, LogInData.password, LogInData.name, history);
        
        
    }

    return (
        <Container>
        <Box sx={{ flexGrow: 1, mt: 10 }}>
           <Grid container spacing={2}>
               <Grid item xs={12} md={6} sx={{mt: 20}}>
                  <form onSubmit={handleLogin}>
                       <Typography variant="body1" gutterBottom>
                           Register
                       </Typography>
                       <TextField 
                       sx={{width: "75%", m: 2}}
                       id="standard-basic" 
                       label="Your Name" 
                       name="name"
                       onBlur={handleOnBlur}                      
                       variant="standard" /> <br />
                       <TextField 
                       sx={{width: "75%", m: 2}}
                       id="standard-basic" 
                       label="Your Email" 
                       name="email"
                       onBlur={handleOnBlur}
                       type="email"
                       variant="standard" /> <br />
                       <TextField
                       sx={{width: "75%", m: 2}}
                       id="standard-basic"
                       label="Your Password"
                       name="password"
                       onBlur={handleOnBlur}
                       type="password"
                       variant="standard"/> <br />
                       <TextField
                       sx={{width: "75%", m: 2}}
                       id="standard-basic"
                       label="Retype Your Password"
                       name="password2"
                       onBlur={handleOnBlur}
                       type="password"
                       variant="standard"/> <br />
                           
                       <Button type="submit" variant="contained">Register</Button> <br />
                       <NavLink style={{textDecoration: 'none'}} to="/login"><Button variant="text">already Register?Please Login</Button></NavLink>
                  </form>
                    {user?.email && <Alert severity="success">User created successfully </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
               </Grid>
               <Grid item xs={12} md={6}>
                  <img style={{width: "100%"}} src={login} alt="" />
               </Grid>
           </Grid>
       </Box>
   </Container>
    );
};

export default Register;