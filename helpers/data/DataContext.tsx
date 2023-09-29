import React, { createContext, useContext, useState, useEffect } from "react";

const ApiDataContext = createContext({});

export const ApiDataProvider = ({ children }) => {
  const [apiData, setApiData] = useState(() => {
    // Try to retrieve cached data from localStorage
    const cachedData = localStorage.getItem("apiDataCache");
    return cachedData ? JSON.parse(cachedData) : null;
  });

  useEffect(() => {
    const fetchAndCacheData = async () => {
      try {
        const response = await fetch("http://18.235.14.45/api/homeapi");
        if (response.ok) {
          const data = await response.json();

          // Set the fetched data in state
          setApiData(data);

          // Cache the fetched data in localStorage
          localStorage.setItem("apiDataCache", JSON.stringify(data));
        } else {
          console.error("Error fetching API data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    // Fetch and cache data on component mount
    fetchAndCacheData();

    // Set up a timer to refresh the data every 25 minutes
    const refreshInterval = 20 * 60 * 1000; // 25 minutes in milliseconds
    const refreshDataInterval = setInterval(fetchAndCacheData, refreshInterval);

    // Clean up the interval when the component unmounts
    return () => clearInterval(refreshDataInterval);
  }, [ApiDataContext]);

  return (
    <ApiDataContext.Provider value={apiData}>
      {children}
    </ApiDataContext.Provider>
  );
};

export const useApiData = () => useContext(ApiDataContext);
