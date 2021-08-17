import * as React from "react";

export interface userDataType{
    isSignedIn: boolean;
    co_id: any;
    id: any;
    name: any;
    email: any;
    role: any;
    created_at: any;
    updated_at:any;
}

export interface userDataContextType{ 
    userData: userDataType;
    setUserData: React.Dispatch<React.SetStateAction<userDataType>>
}

export interface SystemAdminDataType{
    isSignedIn: boolean;
    id: any;
    name: any;
    email: any;
    phone: any;
    role: any;
    created_at: any;
    updated_at:any;
}

export interface SystemAdminDataContextType{ 
    systemAdminData: SystemAdminDataType;
    setSystemAdminData: React.Dispatch<React.SetStateAction<SystemAdminDataType>>
}


export const UserDataContext = React.createContext<userDataContextType>({} as userDataContextType)
export const SystemAdminDataContext = React.createContext<SystemAdminDataContextType>({} as SystemAdminDataContextType)