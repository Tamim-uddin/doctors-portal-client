import { Alert, Button, Input, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const Adddoctor = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [image, setimage] = useState(null);
    const [success, setsuccess] = useState(false);

    const handleSubmit = e => {
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:5000/doctors', {
        method: 'POST',
        body: formData
        })
        .then(res => res.json())
        .then(data => {
        if(data.insertedId){
            setsuccess('Doctor added successfully');
            console.log('Doctor added successfully');
        }
        })
        .catch(error => {
        console.error('Error:', error);
        });




        e.preventDefault();
    }
    return (
        <div>
            <h3>Add a doctor</h3>
            <form onSubmit={handleSubmit}>
            <TextField 
             sx={{width: '65%'}}
             label="Name" 
             required
             onChange={e => setname(e.target.value)}
             variant="standard" /> <br />
            <TextField 
             sx={{width: '65%'}}
             label="Email" 
             required
             onChange={e => setemail(e.target.value)}
             type= "email"
             variant="standard" /> <br /> <br />
            
                <Input 
                sx={{width: '65%'}}
                accept="image/*"
                type="file" 
                onChange={e => setimage(e.target.files[0])}/> <br />
                <Button variant="contained" type= "submit">
                   Add Doctor
                </Button>           
            </form>
            {success && <Alert severity="success">{success}</Alert>}
        </div>
    );
};

export default Adddoctor;