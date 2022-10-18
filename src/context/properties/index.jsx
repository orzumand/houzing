import { createContext, useReducer } from "react";
import { reducer } from "./reduser";

const PropertiesContect = createContext();
const PropertiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <PropertiesContect.Provider value={[state, dispatch]}>
      {children}
    </PropertiesContect.Provider>
  );
};

export default PropertiesProvider;
