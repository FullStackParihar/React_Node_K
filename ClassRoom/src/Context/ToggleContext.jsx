import React, { createContext, useState, useContext } from "react";

// Create the context
const ToggleContext = createContext();

// Create the provider
export const ToggleProvider = ({ children }) => {
    const [toggle, setToggle] = useState(true);

    const toggleValue = () => {
        setToggle((prev) => !prev);
    };

    return (
        <ToggleContext.Provider value={{ toggle, toggleValue }}>
            {children}
        </ToggleContext.Provider>
    );
};

// Custom hook to use the toggle context
export const useToggle = () => useContext(ToggleContext);
