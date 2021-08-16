import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { SystemAdminDataContext } from '../../../Contexts/UserDataContext';
import SASidebar from '../SASidebar/SASidebar';
import SATopbar from '../SATopbar/SATopbar';

const SADashboard = ({ children }: any) => {
    const {setSystemAdminData } = useContext(SystemAdminDataContext);
    const [isLogOut, setIsLogOut] = useState(false);
    const logOut = () => {
        localStorage.removeItem('token');
        setSystemAdminData({
            isSignedIn: false,
            id: "",
            name: "",
            email: "",
            phone:"",
            role: "system-admin",
            created_at: "",
            updated_at: "",
        });
        setIsLogOut(true);
    }
    return (
        <div className="dashboard">
            <SASidebar logOut={logOut}/>
            <div className="main-area">
                <SATopbar logOut={logOut} />
                <div className="main-content-area p-4">
                    {children}
                </div>
                {
                    isLogOut &&
                    <Redirect to="/system-admin/login" />
                }
            </div>
        </div>
    );
};

export default SADashboard;