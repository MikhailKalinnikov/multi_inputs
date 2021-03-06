import { createContext, useContext, useState } from "react";

const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setValues = (values) => {
    setData((prev) => ({ ...prev, ...values }));
  };

  return (
    <DataContext.Provider value={{ data, setValues }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
export default DataProvider;
