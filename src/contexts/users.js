import { createContext, useEffect, useState } from "react";
import { getUsers } from "../services/user";

export const usersContext = createContext();

function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(res => setUsers(res?.data))
      .catch(err => console.log(err))
}, [])

return (
  <usersContext.Provider value={{ users, setUsers }}>
    {children}
  </usersContext.Provider>
);
}

export default UsersProvider;
