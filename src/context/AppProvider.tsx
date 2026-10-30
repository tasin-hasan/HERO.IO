"use client";
import { TAppProps } from '@/types/AppdataType';
import React, { createContext, ReactNode, useState } from 'react';


type AppContextType = {
  installedApps: TAppProps[];
  setInstalledApps: React.Dispatch<React.SetStateAction<TAppProps[]>>
};

export const AppContext = createContext<AppContextType>({
    installedApps: [],
    setInstalledApps: ()=> {}
});

const AppProvider = ({children}: {children: ReactNode}) => {
    const [installedApps, setInstalledApps] = useState<TAppProps[]>([]);

    const sharedData = {
        installedApps,
        setInstalledApps
    }

    return (
        <AppContext.Provider value={sharedData}>{children}</AppContext.Provider>
    );
};

export default AppProvider;