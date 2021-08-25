import React, { useContext, useState } from 'react';
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
            role: "system-admin",
            created_at: "",
            updated_at: "",
        });
        setIsLogOut(true);
    }
    return (
        <div className="dashboard">
            <SASidebar/>
            <div className="main-area">
                <SATopbar/>
                <div className="main-content-area p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SADashboard;