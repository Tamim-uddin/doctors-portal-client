import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [adminemail, setadminemail] = useState('');
    const [success, setsuccess] = useState(false);
    const {token} = useAuth();

    const handleonBlur = e => {
        setadminemail(e.target.value);
    }

    const handleonSubmit = e => {
        const user = { adminemail}

        fetch('https://secret-tundra-43833.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setsuccess(true)
            }
            console.log(data)
        })


        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleonSubmit}>
            <TextField 
             label="Email"
             type="email"
             onBlur={handleonBlur} 
             variant="standard" />
             <Button type="submit" variant="contained">Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin Successfully </Alert>}
        </div>
    );
};

export default MakeAdmin;