
import Sidebar from './Sidebar/Sidebar';
import Topbar from './Topbar/Topbar';
import './Dashboard.css';
import { useContext, useState } from 'react';
import { ConpanyDataContext } from '../../Contexts/UserDataContext';

const Dashboard = ({children}:any) => {
    const { companyData, setCompanyData } = useContext(ConpanyDataContext);
    const [isLogOut, setIsLogOut] = useState(false);

    const logOut = () => {
        localStorage.removeItem('token');
        setCompanyData({
          isSignedIn: false,
          co_id: "",
          id: "",
          company_name: "",
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