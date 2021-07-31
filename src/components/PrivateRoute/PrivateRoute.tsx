  
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';

interface UserDataType{
    [key: string]: any  
}

const PrivateRoute = ({children,...rest}:UserDataType) => {
    var {userDetails}:UserDataType = useContext();
    
    return (
        <Route
      {...rest}
      render={({ location }) =>
      userDetails.isSignIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;