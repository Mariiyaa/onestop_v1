import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const DataContext = createContext();

// Create a custom hook to use the context
export const useData = () => useContext(DataContext);

// Create a provider component to wrap the app
export const AgentData = ({ children }) => {
  const [Data, setData] = useState(() => {
    // Check local storage for existing data
    const savedData = localStorage.getItem('agentData');
    return savedData ? JSON.parse(savedData) : { name: "", email: "", password: "" };
  });

  // Store Data in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('agentData', JSON.stringify(Data));
  }, [Data]);

  return (
    <DataContext.Provider value={{ Data, setData }}>
      {children} {/* Provide context to child components */}
    </DataContext.Provider>
  );
};
