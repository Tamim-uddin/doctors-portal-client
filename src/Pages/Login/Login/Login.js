import { Alert, Button, CircularProgress, Container } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import login from '../../../images/login.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [LogInData, setLogInData] = useState({});
    const {loginUser, user, isLoading, authError, signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    if(isLoading){
        return <CircularProgress />
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = {...LogInData};
        newLogInData[field] = value;
        setLogInData(newLogInData);
        
    }

    const handleLogin = e => {
        e.preventDefault()
        loginUser(LogInData.email, LogInData.password, location, history)
    }


    const handleGooglelogin = () => {
        signInWithGoogle(location, history)
    }


    return (
        <Container>
             <Box sx={{ flexGrow: 1, mt: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{mt: 20}}>
                       <form onSubmit={handleLogin}>
                            <Typography variant="body1" gutterBottom>
                                Login
                            </Typography>
                            <TextField 
                            sx={{width: "75%", m: 2}}
                            id="standard-basic" 
                            label="Your Email" 
                            name="email"
                            onChange={handleOnChange}
                            type="email"
                            variant="standard" /> <br />
                            <TextField
                            sx={{width: "75%", m: 2}}
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            variant="standard"/> <br />
                                
                            <Button type="submit" variant="contained">Login</Button> <br />
                            <NavLink style={{textDecoration: 'none'}} to="/register"><Button variant="text">New User?Please Register</Button></NavLink>
                       </form>
                       {user?.email && <Alert severity="success">User Login successfully </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    <p>----------------------------------</p>
                    <Button onClick={handleGooglelogin} type="submit" variant="contained">Google Login</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                       <img style={{width: "100%"}} src={login} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;