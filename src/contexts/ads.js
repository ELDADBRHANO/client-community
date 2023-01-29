import { createContext, useState } from "react";

export const adsContext = createContext();

function AdsProvider({ children }) {
  const [ads, setAds] = useState([]);

  return (
    <adsContext.Provider value={{ ads, setAds}}>
      {children}
    </adsContext.Provider>
  );
}

export default AdsProvider;
