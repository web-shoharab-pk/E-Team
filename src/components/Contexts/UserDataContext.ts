import * as React from "react";

export interface UserDataType{
    isSignedIn: boolean;
    co_id: any;
    company_name: any;
    email: any;
    role: {role_name:any,role_id:any};
    created_at: any;
    updated_at:any;
}

export interface UserDataContextType{ 
    userData: UserDataType;
    setUserData: React.Dispatch<React.SetStateAction<UserDataType>>
}

export const UserDataContext = React.createContext<UserDataContextType>({} as UserDataContextType)