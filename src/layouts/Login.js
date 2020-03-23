import React, { Component, useState } from 'react'
import { Redirect } from "react-router-dom";
import logo from '../../src/logo.svg'
import '../../src/App.css';
import '../../src/floating-labels.css'
import axios from 'axios';
import { useAuth } from "../variables/Auth";
import {browserHistory} from "react-router-dom";
function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [ip, setIP] = useState("");
    const [database, setDatabase] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    function postLogin() {
      axios.post("https://www.somePlace.com/auth/login", {
        ip,
        database,
        email,
        password
      }).then(result => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      }).catch(e => {
        setIsError(true);
      });
    }

    if (isLoggedIn) {
        const referer = props.location.state.referer || '/dashboard';
        return <Redirect to={referer} />;
    }


    function sampleForm() {
      window.location.href = "http://localhost:3000/dashboard";
    }
  
    return (
        <div>
        {/* { isError &&<Error>The ip or database provided were incorrect!</Error> } */}
        <form className="form-signin">
            <div className="text-center mb-4">
                <img className="mb-4" src={logo} alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">HELIX CRM</h1>
                <p><i>The Customer Relationship Management (CRM) system is used to enter, update, and check status on cases created with the Management</i></p>
            </div>

            <div className="form-label-group">
                <input type="text" id="inputIP" className="form-control" placeholder="IP address" value={ip} onChange={e => {setIP(e.target.value);}} name="ip" required="" autoFocus="" />
                <label htmlFor="inputIP">IP address</label>
            </div>

            <div className="form-label-group">
                <input type="text" id="inputDatabase" className="form-control" placeholder="Database" value={database} onChange={e => {setDatabase(e.target.value);}} name="database" required="" autoFocus="" />
                <label htmlFor="inputDatabase">Database</label>
            </div>
            
            <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" value={email} onChange={e => {setEmail(e.target.value);}} name="email" required="" autoFocus="" />
                <label htmlFor="inputEmail">Email address</label>
            </div>

            <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={password} onChange={e => {setPassword(e.target.value);}} name="password" required="" />
                <label htmlFor="inputPassword">Password</label>
            </div>

            {/* <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div> */}
            <button className="btn btn-lg btn-success btn-block" type="button" onClick={sampleForm}>Login</button>
            <p className="mt-5 mb-3 text-muted text-center">© 2019-2020</p>
        </form> 
    </div>
    );
  }
  
  export default Login;