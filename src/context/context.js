import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const contextValue = {
    selectedLanguage,
    setSelectedLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default AppProvider;
