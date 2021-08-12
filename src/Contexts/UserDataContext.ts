import * as React from "react";

export interface CompanyDataType{
    isSignedIn: boolean;
    co_id: any;
    id: any;
    company_name: any;
    email: any;
    role: any;
    created_at: any;
    updated_at:any;
}

export interface CompanyDataContextType{ 
    companyData: CompanyDataType;
    setCompanyData: React.Dispatch<React.SetStateAction<CompanyDataType>>
}

export interface SystemAdminDataType{
    isSignedIn: boolean;
    id: any;
    name: any;
    email: any;
    role: any;
    created_at: any;
    updated_at:any;
}

export interface SystemAdminDataContextType{ 
    systemAdminData: SystemAdminDataType;
    setSystemAdminData: React.Dispatch<React.SetStateAction<SystemAdminDataType>>
}


export const ConpanyDataContext = React.createContext<CompanyDataContextType>({} as CompanyDataContextType)
export const SystemAdminDataContext = React.createContext<SystemAdminDataContextType>({} as SystemAdminDataContextType)