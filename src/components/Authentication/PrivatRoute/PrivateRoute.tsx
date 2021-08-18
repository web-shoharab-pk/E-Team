import React, { useContext } from 'react';
import { UserDataContext } from '../../../Contexts/UserDataContext';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }: any) => {
    const {userData,setUserData} = useContext(UserDataContext)
    return (
        <Route
            {...rest}
            render={({location}:any)=> userData.isSignedIn ? (
                children
                ):(
                    <Redirect
                    to={{
                        pathname: "/login",
                        state: {from:location}
                    }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;