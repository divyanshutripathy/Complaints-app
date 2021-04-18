import './App.css';
import React, { useEffect, useState } from 'react';
import Complainer from './Complainer';
import Admin from './Admin';
import { Button } from '@material-ui/core';
import SignIn from './SignIn';
import {auth} from './firebase';

function App() {

  const [admin, setAdmin] = useState(0);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((_user) => {
      console.log(_user);
      _user ? setAdmin(2) : setAdmin(0);
      // console.log("Ye hai:")
      // console.log(_user);
    });
    return unsubscribe;
  }, []);
  console.log("admin: " + admin);

  function handleSignOut(){
    auth.signOut();
    setAdmin(0);
  }

  if (admin === 1){
    return(
      <div>
        <div className="App">
          <div className="heading">
            <h1>Municipality Complaints List</h1>
          </div>
        </div>
        <div className="admin__button">
          <Button variant="contained" color="primary" onClick={()=>setAdmin(0)}>Sign Out</Button>
        </div>
        <hr/>
        <SignIn/>
        {console.log("after sign in: " + admin)}
      </div>
    );
  }

  if (admin === 2){
    return(
      <div>
        <div className="App">
          <div className="heading">
            <h1>Municipality Complaints List</h1>
          </div>
        </div>
        <div className="admin__button">
          <Button variant="contained" color="primary" onClick={handleSignOut}>Sign Out</Button>
        </div>
        <hr/>
        <Admin/>
      </div>
    );
  }


  return (
    <div>
      <div className="App">
        <div className="heading">
          <h1>Municipality Complaints Page</h1>
        </div>
      </div>
      <div className="admin__button">
      <Button variant="contained" color="primary" onClick={()=>setAdmin(1)}>Admin Login</Button>
      </div>
      <hr/>
      <Complainer/>
    </div>
  );
}

export default App;
