import { createContext, useContext } from "react";

const BooksContext = createContext();

export function useBooks() {
  return useContext(BooksContext);
}

export const API_URL = "http://localhost:3001";

export const BooksContextProvider = ({ children }) => {
  const personName = "Rocky";
  const contextValues = { personName };

  return (
    <BooksContext.Provider value={contextValues}>
      {children}
    </BooksContext.Provider>
  );
};
