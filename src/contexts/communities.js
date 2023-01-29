import { createContext, useState } from "react";

export const communitiesContext = createContext();

function CommunitiesProvider({ children }) {
  const [communities, setCommunities] = useState([]);

  return (
    <communitiesContext.Provider value={{ communities, setCommunities}}>
      {children}
    </communitiesContext.Provider>
  );
}

export default CommunitiesProvider;
