const { createContext, useState, useEffect } = require('react');

export const EXPContext = createContext();

export const EXPProvider = ({ children }) => {
  const [exp, setExp] = useState(Number(localStorage.getItem('exp')));
  const addExp = (gainedExp) => setExp((currentExp) => currentExp + gainedExp);

  useEffect(() => localStorage.setItem('exp', exp), [exp]);

  return (
    <EXPContext.Provider value={{ exp, addExp }}>
      {children}
    </EXPContext.Provider>
  );
};
