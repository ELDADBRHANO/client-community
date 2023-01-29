import { createContext, useState } from "react";

export const postsContext = createContext();

function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  
  return (
    <postsContext.Provider value={{ posts, setPosts}}>
      {children}
    </postsContext.Provider>
  );
}

export default PostsProvider;
