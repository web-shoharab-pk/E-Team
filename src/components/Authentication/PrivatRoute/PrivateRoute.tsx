import React, { useContext } from 'react';
import { ConpanyDataContext } from '../../../Contexts/UserDataContext';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }: any) => {
    const {companyData,setCompanyData} = useContext(ConpanyDataContext)
    return (
        <Route
            {...rest}
            render={({location}:any)=> companyData.isSignedIn ? (
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