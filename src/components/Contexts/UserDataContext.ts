import * as React from "react";

interface Icontext{ 
    userData: {
        id: string;
        age: number;
    }
    setUserData: React.Dispatch<React.SetStateAction<{
        id: string;
        age: number;
    }>>
}

export const UserDataContext = React.createContext<Icontext>({} as Icontext)