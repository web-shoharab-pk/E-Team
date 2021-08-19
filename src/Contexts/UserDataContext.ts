import * as React from "react";

export interface UserDataType{
    isSignedIn: boolean;
    co_id: any;
    id: any;
    name: any;
    company_name: any;
    email: any;
    role: any;
    created_at: any;
    updated_at:any;
}

export interface UserDataContextType{ 
    userData: UserDataType;
    setUserData: React.Dispatch<React.SetStateAction<UserDataType>>
}

export interface SystemAdminDataType{
    isSignedIn: boolean;
    id: any;
    name: any;
    email: any;
    phone:any;
    role: any;
    created_at: any;
    updated_at:any;
}

export interface SystemAdminDataContextType{ 
    systemAdminData: SystemAdminDataType;
    setSystemAdminData: React.Dispatch<React.SetStateAction<SystemAdminDataType>>
}


export const UserDataContext = React.createContext<UserDataContextType>({} as UserDataContextType)
export const SystemAdminDataContext = React.createContext<SystemAdminDataContextType>({} as SystemAdminDataContextType)