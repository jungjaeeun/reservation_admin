import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (token: string, expiresIn: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenExpiredDate = localStorage.getItem("tokenExpiredDate");

    if (token && tokenExpiredDate && new Date(tokenExpiredDate) > new Date()) {
      setIsLoggedIn(true);
    }

    setIsLoading(false);
  }, []);

  const login = (token: string, expiresIn: string) => {
    localStorage.setItem("token", token);

    let tokenExpiredDate: any;
    if (expiresIn.endsWith("h")) {
      const hours = parseInt(expiresIn);
      tokenExpiredDate = new Date(Date.now() + hours * 60 * 60 * 1000);
    } else if (expiresIn.endsWith("d")) {
      const days = parseInt(expiresIn);
      tokenExpiredDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    }
    localStorage.setItem("tokenExpiredDate", tokenExpiredDate.toISOString());

    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiredDate");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
