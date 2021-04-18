import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import "./Complainer.css";
import db from './firebase';
import firebase from 'firebase';

export default function Complainer() {

    // State hooks
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [no, setNo] = useState('');
    const [complaint, setComplaint] = useState('');
    const[disabled, setDisabled] = useState(true);

    // Effect hook
    useEffect(() => {
        setDisabled(!(complaint && name && no && address));
    }, [name, no, address, complaint])

    function handleSubmit(event){
        event.preventDefault();
        db.collection('complaints').add({
            name: name,
            address: address,
            no: no,
            complaint: complaint,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(
            () => alert("Your complaint was registered!"),
            (error) => alert(error.message)
        );
        setNo('');
        setName('');
        setAddress('');
        setComplaint('');

    }

    return (
        <div className="complain__form">
            <form>
                <FormControl fullWidth="true">
                    <InputLabel>Full Name</InputLabel>
                    <Input fullWidth="true" value={name} onChange={event => setName(event.target.value)}/>
                </FormControl>
                <br/> <br/>
                <FormControl fullWidth="true">
                    <InputLabel>Contact No.</InputLabel>
                    <Input fullWidth="true" value={no} onChange={event => setNo(event.target.value)}/>
                </FormControl>
                <br/> <br/>
                <FormControl fullWidth="true">
                    <InputLabel>Address</InputLabel>
                    <Input fullWidth="true" value={address} onChange={event => setAddress(event.target.value)}/>
                </FormControl>
                <br/> <br/>
                <textarea name="complaint__box" value={complaint} cols="60" rows="10" placeholder="Enter your complaint within 500 words" onChange={event => setComplaint(event.target.value)}></textarea>
                <br/> <br/>
                <Button type='submit' color="primary" variant="contained" disabled={disabled} onClick={handleSubmit}>Register Complaint</Button>
            </form>
        </div>
    )
}
