import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  OnLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
