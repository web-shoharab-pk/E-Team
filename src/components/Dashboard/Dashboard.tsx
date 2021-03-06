import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './Dashboard.css';
import { useContext, useState } from 'react';
import { UserDataContext } from '../../Contexts/UserDataContext';

const Dashboard = ({children}:any) => {
    const { userData, setUserData } = useContext(UserDataContext);
    const [isLogOut, setIsLogOut] = useState(false);

    const logOut = () => {
        localStorage.removeItem('token');
        setUserData({
          isSignedIn: false,
          co_id: "",
          id: "",
          name: "",
          company_name:"",
          email: "",
          role: "",
          created_at: "",
          updated_at: "",
        });
        setIsLogOut(true);
      }
    return (
        <div className="dashboard">
            <Sidebar logOut={logOut}/>
            <div className="main-area">
                <Topbar logOut={logOut}/>
                <div className="main-content-area p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;