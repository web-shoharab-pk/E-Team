import React from 'react';
import SASidebar from '../SASidebar/SASidebar';
import SATopbar from '../SATopbar/SATopbar';

const SADashboard = ({children}:any) => {
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