const { createContext, useState, useEffect } = require('react');

export const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const [coins, setCoins] = useState(Number(localStorage.getItem('coins')));
  const addCoins = (gainedCoins) => setCoins((currentCoins) => currentCoins + gainedCoins);
  const spendCoins = (spentCoins) => {
    if (spentCoins > coins) {
      return false;
    }
    setCoins((currentCoins) => currentCoins - spentCoins);
    return true;
  }

  useEffect(() => localStorage.setItem('coins', coins), [coins]);

  return (
    <CoinContext.Provider value={{
      coins,
      addCoins,
      spendCoins
    }}>
      {children}
    </CoinContext.Provider>
  );
};
