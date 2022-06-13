// Imports
import React from 'react';
import "./style.css";
import Signup from './Components/Signup';
import Login from './Components/Login';
import { Route , Redirect } from 'react-router';


const App = () => {
    // Import
    return (
        <>
        <Route exact path="/Signup" component={Signup}/>
        <Route exact path="/Login" component={Login}/>
        <Redirect from="/" to="/Signup" />
        </>
    );
};

// exports
export default App;