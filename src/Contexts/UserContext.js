import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  //   sign up Authentication
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in authentication

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout auth

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = { user, createUser, userLogin, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;