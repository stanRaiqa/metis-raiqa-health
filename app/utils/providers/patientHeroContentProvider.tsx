'use client'

import React, {createContext, ReactNode, useState} from 'react';

interface HeroContentContextType {
    contentIndex: number;
    setContentIndex: (val: number) => void;
}

export const HeroContentContext = createContext<HeroContentContextType | undefined>(undefined);

export const PatientHeroContentProvider = ({children}:{children:ReactNode}) => {
    const [contentIndex, setContentIndex] = useState<number>(0);
    return (
        <HeroContentContext.Provider value={{contentIndex, setContentIndex}}>
            {children}
        </HeroContentContext.Provider>
    );
}

export default PatientHeroContentProvider;