const { createContext, useState, useEffect } = require('react');

export const EXP_PER_LEVEL = 1000;

export const EXPContext = createContext();

export const EXPProvider = ({ children }) => {
  const [exp, setExp] = useState(Number(localStorage.getItem('exp')));
  const addExp = (gainedExp) => setExp((currentExp) => currentExp + gainedExp);

  useEffect(() => localStorage.setItem('exp', exp), [exp]);

  const expSinceLastLevel = exp % EXP_PER_LEVEL;
  const level = Math.floor(exp / EXP_PER_LEVEL) + 1;

  return (
    <EXPContext.Provider value={{
      exp,
      expSinceLastLevel,
      level,
      addExp
    }}>
      {children}
    </EXPContext.Provider>
  );
};
