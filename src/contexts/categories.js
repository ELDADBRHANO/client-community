import { createContext, useEffect, useState } from "react";
import { getCategories } from "../services/categories";

export const categoriesContext = createContext();

function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => setCategories(res?.data));
  }, []);
  return (
    <categoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </categoriesContext.Provider>
  );
}

export default CategoriesProvider;
