import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import bg from '../../../images/bg.png';

const contactBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMod: 'darken, luminosity'
}

const ContuctUs = () => {
    return (
        <Box style={contactBg} sx={{ my: 10}}>
            <Container sx={{p: 10}}>
                <Typography sx={{color: 'white'}} variant="overline" display="block" gutterBottom>
                   CONTUCT US
                </Typography>
                <Typography  variant="h5" gutterBottom component="div" sx={{mb: 5, color: 'white'}}>
                    Always Connect With Us
                </Typography>
                <TextField
                    sx={{width: "80%", mb: 2, backgroundColor: "white", borderRadius: 2}} 
                    id="outlined-size-small"
                    defaultValue="Email Address"
                    size="small"
                />
                <br />
                <TextField
                    sx={{width: "80%", mb: 2, backgroundColor: "white", borderRadius: 2}}
                    id="outlined-size-small"
                    defaultValue="subject"
                    size="small"
                />
                <br />
                <TextField
                    sx={{width: "80%", mb: 2, backgroundColor: "white", borderRadius: 2}}
                    id="outlined-multiline-static"                   
                    multiline
                    rows={4}
                    defaultValue="Your Message"
                />
                <br />
                <Button sx={{px: 5, backgroundColor: "#41BFAD"}} variant="contained">SEND</Button>
            </Container>
        </Box>
    );
};

export default ContuctUs;