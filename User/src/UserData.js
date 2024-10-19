import React, { createContext, useState, useContext, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const UserData = ({ children }) => {
  const [Data, setData] = useState(() => {
    // Retrieve saved data from localStorage
    const savedData = localStorage.getItem('agentData');
    try {
      // Parse the saved data or set default if no data is present
      return savedData ? JSON.parse(savedData) : { name: "", email: "", password: "" }; 
    } catch (error) {
      console.error('Error parsing agentData from localStorage:', error);
      return { name: "", email: "", password: "" }; // Default structure on error
    }
  });

  // Persist the `Data` to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('agentData', JSON.stringify(Data));
  }, [Data]);

  return (
    <DataContext.Provider value={{ Data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
