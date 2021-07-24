import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './Dashboard.css';

const Dashboard = (props:any) => {
    const children = props.children;
    return (
        <div className="dashboard">
            <Sidebar/>
            <div className="main-area">
                <Topbar/>
                <div className="main-content-area p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;