import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import axios from "axios";
export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      // console.log("Current user: ", currentUser);
      setLoading(false);
      // if user is exists then issue a token
      if (currentUser) {
        axios
          .post(
            "https://cardoctor-bdserver-sepia.vercel.app/jwt",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then(() => {
            // console.log("Token Response", res.data);
          });
      } else {
        axios
          .post(
            "https://cardoctor-bdserver-sepia.vercel.app/logout",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then(() => {});
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [user?.email]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProviders;

AuthProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
