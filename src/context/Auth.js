import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [pending, setPending] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_API_BASE_URL + "/login/check",
        {
          withCredentials: true,
        }
      );

      setAuthenticated(data.LoggedIn);
      setPending(false);
    })();
  }, []);

  if (pending)
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader
          type="Watch"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
