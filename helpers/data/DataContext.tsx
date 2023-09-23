// DataContext.tsx
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

 

interface AppData {
    homeData : any
}

// Create a context for your data
const DataContext = createContext<AppData | undefined>(undefined);

// Create a data provider component
export function DataProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<AppData | undefined>(undefined);

    // Fetch data from your API when the component mounts
    useEffect(() => {
        fetch('http://18.235.14.45/api/homeapi')
            .then((response) => response.json())
            .then((responseData) => {
                // Assuming the API response matches the AppData structure
                setData(responseData);
                
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    console.log("home api",data)

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

// Create a custom hook to access the data
export function useAppData() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useAppData must be used within a DataProvider');
    }
    return context;
}
