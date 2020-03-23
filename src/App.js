import React, { useState } from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import './floating-labels.css'
import { AuthContext } from "./variables/Auth";
import PrivateRoute from './PrivateRoute';
import Login from './layouts/Login';
import Admin from './layouts/Admin';
import Dashboard from './layouts/Dashboard'

let AdminLayout = Admin;

function App() {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
    return(
      <div className="App">
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <Router>
            <Route path="/" component={Login} exact />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/dashboard_2" component={AdminLayout} />
          </Router>
        </AuthContext.Provider>
      </div>
    );
  }

  // API CALL NATIVE
  // componentDidMount() {
  //   fetch('http://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ contacts: data })
  //     console.log(this.state.contacts)
  //   })
  //   .catch(console.log)
  // }

  export default App;
