import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png';
import { Container, Typography } from '@mui/material';

const Feature = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Grid container spacing={2} sx={{my: 10}}>
        <Grid item xs={12} md={6} >
         <img style={{width: "400px"}} src={treatment} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{textAlign: "left", color: "gray"}}>
            <Typography variant="h3" gutterBottom component="div">
                Exceptional Dantel <br />
                Care, On Your Terms
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ lineHeight: 2.5}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, aspernatur quasi in minima officia numquam laudantium unde fugiat possimus optio, obcaecati enim fugit? Quaerat suscipit velit mollitia nostrum deserunt quidem, sed dolores odit placeat veniam dolorum dolorem repellendus voluptatum recusandae voluptatibus molestiae consequuntur, inventore obcaecati. Omnis earum eaque in velit consequuntur dolorum repellat fuga dolore ad rem nobis temporibus sint similique sapiente praesentium, quasi sunt optio, vitae reiciendis eos ducimus ut accusamus. Expedita ex, culpa minima ullam ipsa aut. Ut a aliquid nisi quibusdam, vitae nemo nesciunt fugiat qui quo harum provident earum id, similique alias accusamus! Natus, incidunt velit.
            </Typography>
        </Grid>
      </Grid>
      </Container>
    </Box>
    );
};

export default Feature;