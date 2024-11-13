import './index.css';
import { createContext, StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { auth } from './Firebase/Firebase.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import Profile from './Pages/Profile.jsx';

// Create Context
export const AuthContext = createContext();

// AuthProvider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGooglePopupLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleGithubPopupLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        setUser(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("User state updated:", user);
  }, [user]);

  // Context Value
  const authData = {
    user,
    handleGooglePopupLogin,
    handleGithubPopupLogin,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signUp',
        element: <SignUp />
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      }
    ]
  },
]);

// Render Application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
