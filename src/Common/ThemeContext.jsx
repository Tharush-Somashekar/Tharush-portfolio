import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);


//.. the theme component 
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

//..to save current theme and provide reference
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  //..to switch between themes (if fucntion)
  const toggleTheme = () => {
    console.log('theme switched')
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  //..
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};