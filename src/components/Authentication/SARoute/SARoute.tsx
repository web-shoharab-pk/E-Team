import React, { useContext } from 'react';
import { SystemAdminDataContext } from '../../../Contexts/UserDataContext';
import { Redirect, Route } from 'react-router';

const SARoute = ({ children, ...rest }: any) => {
    const { systemAdminData, setSystemAdminData } = useContext(SystemAdminDataContext)
    return (
        <Route
            {...rest}
            render={({location}:any)=> systemAdminData.isSignedIn ? (
                children
                ):(
                    <Redirect
                    to={{
                        pathname: "/system-admin/login",
                        state: {from:location}
                    }}
                    />
                )
            }
        />
    );
};

export default SARoute;