import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "./variables/Auth";

function PrivateRoute({ component: Component, ...rest }) {
    const isAuthenticated = useAuth();
    const { authTokens } = useAuth();
    return (
      <Route
        {...rest}
        render={props =>
            authTokens ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/", state: { referer: props.location } }} />
          )
        }
      />
    );
  }
export default PrivateRoute;