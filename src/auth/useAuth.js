import { useCallback, useMemo } from 'react';
import history from '../history'; // TODO: history may pass from props
import { useAuthContext } from './AuthContext';

const useIsAuthenticated = expiresAt => {
  return useMemo(() => {
    return new Date().getTime() < expiresAt;
  }, [expiresAt]);
};

export const useAuth = () => {
  const { auth, authState, updateAuthState } = useAuthContext();

  const isAuthenticated = useIsAuthenticated(authState.expiresAt);

  const login = useCallback(() => {
    auth.authorize();
  }, [auth]);

  const logout = useCallback(() => {
    updateAuthState({
      accessToken: null,
      idToken: null,
      expiresAt: 0
    });
    localStorage.removeItem('isLoggedIn');

    auth.logout({
      returnTo: window.location.origin
    });

    // navigate to the home route
    history.replace('/landing-page');
  }, [auth, updateAuthState]);

  const setSession = useCallback(
    authResult => {
      localStorage.setItem('isLoggedIn', 'true');

      let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
      updateAuthState({
        accessToken: authResult.accessToken,
        idToken: authResult.idToken,
        expiresAt: expiresAt
      });
      history.replace('/landing-page');
    },
    [updateAuthState]
  );

  const renewSession = useCallback(() => {
    auth.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        setSession(authResult);
      } else if (err) {
        logout();
        console.error(err);
        alert(
          `Could not get a new token (${err.error}: ${err.error_description}).`
        );
      }
    });
  }, []);

  const handleAuthentication = useCallback(() => {
    auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        setSession(authResult);
      } else if (err) {
        history.replace('/');
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }, []);

  // retun some functions
  return {
    login,
    logout,
    handleAuthentication,
    isAuthenticated,
    renewSession
  };
};