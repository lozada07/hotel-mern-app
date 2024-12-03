import { createContext, useContext, useState } from "react";


export type SearchBarContextProps = {
    site: string,
    checkIn: Date,
    checkOut: Date,
    adultCount: number;
    childrenCount: number;
    saveValues: (data: SearchBarContextProps) => void;

}


const SearchBarContext = createContext<SearchBarContextProps | undefined>(undefined)

export const SearchBarProvider = ({ children }: { children: React.ReactNode }) => {
    const [site, setSite] = useState<string>(
        () => sessionStorage.getItem("destination") || ""
    );
    const [checkIn, setCheckIn] = useState<Date>(
        () =>
            new Date(sessionStorage.getItem("checkIn") || new Date().toISOString())
    );
    const [checkOut, setCheckOut] = useState<Date>(
        () =>
            new Date(sessionStorage.getItem("checkOut") || new Date().toISOString())
    );
    const [adultCount, setAdultCount] = useState<number>(() =>
        parseInt(sessionStorage.getItem("adultCount") || "0")
    );
    const [childrenCount, setChildrenCount] = useState<number>(() =>
        parseInt(sessionStorage.getItem("childCount") || "0")
    );

    const saveValues = (data: SearchBarContextProps) => {
        setSite(data.site);
        setCheckIn(data.checkIn);
        setCheckOut(data.checkOut);
        setAdultCount(data.adultCount);
        setChildrenCount(data.childrenCount);
    }

    const value: SearchBarContextProps = {
        site: site,
        checkIn: checkIn,
        checkOut: checkOut,
        adultCount: adultCount,
        childrenCount: childrenCount,
        saveValues
    }

    return <SearchBarContext.Provider value={value}>
        {children}
    </SearchBarContext.Provider>

}


export const useSearchBar = () => {
    const context = useContext(SearchBarContext);
    return context as SearchBarContextProps;
};