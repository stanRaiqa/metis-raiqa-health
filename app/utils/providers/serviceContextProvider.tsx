'use client'

import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {ServicesList} from "@/app/types";
import {useParams} from "next/navigation";

interface ServiceContextType {
    serviceName: string;
    setServiceName: (val: string) => void;
    practitionerServices: ServicesList[];
    currentServicePage: ServicesList | undefined;
}

export const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const ServiceContextProvider = ({children}:{children:ReactNode}) => {
    const [serviceName, setServiceName] = useState<string>("");
    const [practitionerServices, setPractitionerServices] = useState<ServicesList[]>([])
    const params = useParams();
    let slug = params?.slug;
    if (Array.isArray(slug)) {
        slug = slug[0];
    }
    const [currentServicePage, setCurrentServicePage] = useState<ServicesList | undefined>(undefined);
    
    useEffect(() => {
        const fetchJson = async () => {
            const res = await fetch('/api/practitioner-services');
            const json = await res.json();
            setPractitionerServices(json);
        };
        fetchJson();
    }, []);

    useEffect(() => {
        if (practitionerServices.length > 0 && slug) {
            setCurrentServicePage(practitionerServices.find(p => p.slug === slug));
        }
    }, [practitionerServices, slug]);

    return (
        <ServiceContext.Provider value={{serviceName, setServiceName, practitionerServices, currentServicePage}}>
            {children}
        </ServiceContext.Provider>
    );
}

export default ServiceContextProvider;