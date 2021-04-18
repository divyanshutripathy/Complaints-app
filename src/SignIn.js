import React, { useRef } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import {auth} from './firebase';
import "./SignIn.css";

function SignIn() {

    const emailRef = useRef(null);
    const passRef = useRef(null);
    
    function handleSignIn(event){
        event.preventDefault();
        console.log(emailRef.current.value)
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        ).then(user => {
            console.log(user)
            console.log("Sign in ho gya");
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="login__form">
            <FormControl fullWidth="true">
                <InputLabel>Admin Email</InputLabel>
                <Input fullWidth="true" inputRef={emailRef}/>
            </FormControl>
            <br/> <br/>
            <FormControl fullWidth="true">
                <InputLabel>Password</InputLabel>
                <Input fullWidth="true" type="password" inputRef={passRef}/>
            </FormControl>
            <br/> <br/>
            <Button type='submit' color="primary" variant="contained" onClick={handleSignIn}>Login</Button>
        </div>
    );
}

export default SignIn
