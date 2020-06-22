import React, { createContext, useState, useContext } from 'react';
import AuthAPI from '../service/AuthApi.js';

const generateAuth = (username, password) => {
    try {
        await AuthAPI.authenticate(username, password);
        this.setState({error :""});
        this.setState({isAuthenticated :true});
    } catch (error) {
        toast.error("Vérifiez vos identifiants de connexion !");
    }
}

const AuthContext = createContext(null);

const useAuthState = () => {
  return useState({
    accessToken: null,
    idToken: null,
    expiresAt: 0
  });
};

const useContextValue = (username, password) => {
  const [authState, updateAuthState] = useAuthState();
  return {
    auth: generateAuth(username, password),
    authState,
    updateAuthState
  };
};

export const AuthProvider = ({ children }) => {
  const value = useContextValue();
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
