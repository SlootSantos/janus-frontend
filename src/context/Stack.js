import React from "react";
import axios from "axios";
export const StackContext = React.createContext();

export const StackProvider = ({ children }) => {
  const [stacks, setStacks] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_API_BASE_URL + "/jam",
        {
          withCredentials: true,
        }
      );

      setStacks(data);
    })();
  }, []);

  return (
    <StackContext.Provider value={{ stacks, setStacks }}>
      {children}
    </StackContext.Provider>
  );
};
